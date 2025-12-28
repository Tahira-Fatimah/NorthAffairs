import { useTrips } from "@/hooks/use-trips";
import { Link } from "wouter";
import { Loader2, Calendar as CalendarIcon, ChevronRight, Tag } from "lucide-react";

import CalendarCard from "@/components/Calendar/CalendarCard";

export default function Calendar() {
  const { data: trips, isLoading } = useTrips();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const sortedTrips = [...(trips || [])].sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-border/50 px-6 py-6 mt-2">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-primary" />
          Upcoming Trips
        </h1>
      </div>

      <div className="max-w-md mx-auto px-4 py-2 space-y-4">
        {sortedTrips.map((trip, index) => (
          <CalendarCard key={trip.id} trip={trip} index={index} />
        ))}

        {sortedTrips.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No upcoming trips found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
