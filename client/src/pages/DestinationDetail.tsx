import { useParams } from "wouter";
import { useSearch } from "wouter/use-browser-location";
import { useTopAttractionById } from "@/hooks/use-top-attractions";
import { useActivityById } from "@/hooks/use-activities";
type Params = {
  id: string;
  activityId: string;
}
export default function DestinationDetail() {
  const { id, activityId } = useParams<Params>();
  const search = useSearch();
  const activity = search?.split("=")[1] as "tourism" | "activity";

  function getTopActivityOrAttraction(activity: "tourism" | "activity") {
    if (activity === "tourism") {
      return useTopAttractionById(activityId || "");
    } else {
      return useActivityById(activityId || "");
    }
  }
  const {
    data: topActivityOrAttraction,
    isLoading,
    isError,
  } = getTopActivityOrAttraction(activity);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-muted-foreground text-sm">Loading destination...</p>
      </div>
    );
  }

  if (isError || !topActivityOrAttraction) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-destructive text-sm">
          Failed to load destination details.
        </p>
      </div>
    );
  }

  const attraction = topActivityOrAttraction;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <img
          src={attraction?.image}
          alt={attraction?.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title */}
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
              {attraction?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Description */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground my-2">
              <i>{attraction?.headline}</i>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {attraction.description}
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Info
            </h3>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <span className="font-medium text-foreground">
                  Duration:
                </span>{" "}
                {attraction?.quickInfo?.duration}
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Best Time: 
                </span>{" "}
                {attraction?.quickInfo?.bestTime}
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Ideal For:
                </span>{" "}
                {attraction?.quickInfo?.idealFor.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
