// TopDestinations.tsx
import { TOP_DESTINATIONS } from "@/constants/home";
import TopDestinationCard from "./TopDestinationCard";
import { Link } from "wouter";

export default function TopDestinations() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Top Destinations
        </h2>

        {/* Vertically stacked container */}
        <div className="flex flex-col gap-6">
          {TOP_DESTINATIONS.map((card, idx) => (
            <Link href={`/destination/${card.id}`}>
              <TopDestinationCard title={card.title} images={card.images} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
