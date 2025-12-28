import { useTrip } from "@/hooks/use-trips";
import { Link, useRoute } from "wouter";
import { Loader2, ArrowLeft, CalendarDays, CheckCircle2, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TripCard } from "@/components/Trip/TripCard";

export default function TripDetails() {
  const [, params] = useRoute("/trip/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: trip, isLoading, isError } = useTrip(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p className="mb-4">Trip not found.</p>
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 relative">
      {/* Hero Image */}
      <div className="relative h-[40vh] w-full">
        {trip.images.length > 0 && (
          <img
            src={trip.images[0]}
            alt={trip.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        
        <Link href="/calendar" className="absolute top-6 left-6 z-10">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
      </div>

      {/* Content Sheet */}
     <TripCard trip={trip} />

      {/* Booking Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border z-20 pb-safe-area">
        <div className="max-w-md mx-auto">
          <Link href="/contact">
            <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl">
              <Ticket className="w-5 h-5 mr-2" />
              Book This Trip
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
