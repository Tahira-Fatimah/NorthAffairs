import { useQuery } from "@tanstack/react-query";
import { TOP_ACTIVITIES } from "@shared/data";
import { TopActivities } from "@shared/schema";

export function useActivities() {
  return useQuery<TopActivities[]>({
    queryKey: ["activities"],
    queryFn: () => Promise.resolve(TOP_ACTIVITIES),
    staleTime: Infinity, // Static data never changes
  });
}

export function useActivity(id: number) {
  return useQuery<TopActivities[]>({
    queryKey: ["activities"],
    queryFn: () => Promise.resolve(TOP_ACTIVITIES.filter(activity => activity.destinationId === id)),
    enabled: !!id,
    staleTime: Infinity,
  });
}