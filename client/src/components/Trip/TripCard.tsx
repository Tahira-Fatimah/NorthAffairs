import { Link } from "wouter";
import { Trip } from "@shared/schema";
import { CalendarDays, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <div className="px-6 -mt-12 relative z-10">
        <div className="bg-card rounded-3xl p-6 shadow-xl border border-border/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground mb-1">{trip.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4 mr-1.5 text-primary" />
                {trip.startDate} - {trip.endDate}
              </div>
            </div>
            {/* <div className="bg-secondary px-3 py-1.5 rounded-lg text-primary font-bold text-lg">
              {trip.price}
            </div> */}
          </div>

          <div className="flex gap-2 mb-6">
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
              {trip.availability}
            </Badge>
            {trip.featured && (
              <Badge className="bg-accent text-accent-foreground border-0">Featured</Badge>
            )}
          </div>

          <div className="prose prose-sm text-muted-foreground mb-8">
            <p>{trip.description}</p>
          </div>

          <h2 className="text-lg font-bold mb-4 font-display flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 mb-[-3px] text-primary" />
            Itinerary
          </h2>

          <div className="space-y-6 relative border-l-2 border-dashed border-border ml-2 pl-6 pb-2">
            {trip.itinerary.map((day, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <h3 className="font-bold text-foreground text-sm mb-1">Day {index + 1}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{day}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
}
