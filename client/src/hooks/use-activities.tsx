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

export function useActivity(id: string) {
  return useQuery<TopActivities[]>({
    queryKey: ["activities"],
    queryFn: () => Promise.resolve(TOP_ACTIVITIES.filter(activity => activity.destinationId === id)),
    enabled: !!id,
    staleTime: Infinity,
  });
}

export function useActivityById(id: string) {
  return useQuery<TopActivities | undefined>({
    queryKey: ["activity", id],
    queryFn: () => Promise.resolve(TOP_ACTIVITIES.find(activity => activity.id === id)),
    enabled: !!id,
    staleTime: Infinity,
  });
}