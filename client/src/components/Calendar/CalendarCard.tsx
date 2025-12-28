import { Trip } from "@shared/schema";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { TreePalm, MountainSnow } from "lucide-react";
import { Tag } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface CalendarCardProps {
  trip: Trip;
  index: number;
}

export default function CalendarCard({ trip, index }: CalendarCardProps) {
  return (
    <motion.div
    key={trip.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.09 }}
  >
    <Link href={`/trip/${trip.id}`}>
      <div className="bg-white rounded-xl px-4 py-6 shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
            <MountainSnow className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
               {trip.startDate} - {trip.endDate}
            </p>
            </div>
            <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">
              {trip.title}
            </h3>
          </div>
          {/* <Badge variant="outline" className="ml-2 whitespace-nowrap bg-secondary/50">
            {trip.price}
          </Badge> */}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-dashed border-border">
          <div className="flex items-center gap-2">
            <Tag className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">
              {trip.availability}
            </span>
          </div>
          <div className="flex items-center text-xs font-semibold text-primary">
            Details
            <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
  );
}