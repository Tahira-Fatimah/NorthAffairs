import { useParams } from "wouter";
import { Loader, Play } from "lucide-react";
import { Section } from "@/components/Destination/TourismSection";
import { useTrip } from "@/hooks/use-trips";
import { useActivities, useActivity } from "@/hooks/use-activities";
import { useTopAttraction } from "@/hooks/use-top-attractions";
import Error from "@/components/Error";
export default function Destination() {
  const { id } = useParams(); // destination id
  const { data: trip, isLoading, isError } = useTrip(id || "");

  const { data: topTouristAttractions, isLoading: topTouristAttractionsLoading, isError: topTouristAttractionsError } = useTopAttraction(id || "");
  const { data: topActivities, isLoading: topActivitiesLoading, isError: topActivitiesError } = useActivity(id || "");

  return (
    <>  
    {isLoading || topTouristAttractionsLoading || topActivitiesLoading && (
      <Loader />
    )}
    {isError || topTouristAttractionsError || topActivitiesError && (
      <Error message="Failed to load destination." />
    )}
    <div className="min-h-screen bg-secondary/20">
      {/* 🎥 HERO VIDEO */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <video
          src={"/skardu-compressed.mp4"} // dynamic video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold capitalize">
              {trip?.title}
            </h1>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* <h2 className="text-2xl font-bold text-center">{id}</h2> */}
        {/* 🏞 TOP ATTRACTIONS */}
        <Section
          type="tourism"
          destinationId={id || ""}
          title="Top Tourist Attractions"
          items={topTouristAttractions || []}
          />

          {/* 🏨 HOTELS */}
          {/* <Section
            title="Top Hotels"
            items={[
              { title: "Serena Hunza", image: "/hunza.jpg" },
              { title: "Luxus Hunza", image: "/hunza.jpg" },
            { title: "Eagles Nest", image: "/hunza.jpg" },
            { title: "Darbar Hotel", image: "/hunza.jpg" },
          ]}
        /> */}

        <Section
          type="activity"
          destinationId={id || ""}
          title="Top Activities"
          items={topActivities || []}
        />
      </main>
    </div>
    </>
  );
}
