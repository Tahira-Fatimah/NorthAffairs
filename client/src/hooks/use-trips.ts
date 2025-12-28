import { useQuery } from "@tanstack/react-query";
import { getTrips, getTripById } from "@shared/data";
import type { Trip } from "@shared/schema";

// Hook to fetch all trips (now using static data)
export function useTrips() {
  return useQuery<Trip[]>({
    queryKey: ["trips"],
    queryFn: () => Promise.resolve(getTrips()),
    staleTime: Infinity, // Static data never changes
  });
}

// Hook to fetch a single trip by ID (now using static data)
export function useTrip(id: number) {
  return useQuery<Trip | null>({
    queryKey: ["trip", id],
    queryFn: () => Promise.resolve(getTripById(id) || null),
    enabled: !!id,
    staleTime: Infinity, // Static data never changes
  });
}
