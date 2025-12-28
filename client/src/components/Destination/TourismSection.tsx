import { TopTouristAttractions } from "@shared/schema";
import { navigate } from "wouter/use-browser-location";


interface SectionProps {
  type: "tourism" | "activity";
  destinationId: string;
  title: string;
  items: TopTouristAttractions[];
}

export function Section({ type, destinationId, title, items }: SectionProps) {


  return (
    <section >
      <h2 className="text-xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" >
        {items.map((item) => (
        <div
        key={item.id}
        onClick={() => navigate(`/destination/${destinationId}/${item.id}?activity=${type}`)}
        className="
          group bg-white rounded-xl overflow-hidden
          shadow-md transition-shadow duration-300
          cursor-pointer
        "
      >
        {/* Image */}
        <div className="relative h-28 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-110
            "
          />
        </div>
      
        {/* Title */}
        <div className="p-3 text-center">
          <p className="text-sm font-semibold">{item.title}</p>
        </div>
      </div>
      
        ))}
      </div>
    </section>
  );
}
