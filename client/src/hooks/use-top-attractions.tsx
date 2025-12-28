import { useQuery } from "@tanstack/react-query";
import { TOP_TOURIST_ATTRACTIONS } from "@shared/data";
import { TopTouristAttractions } from "@shared/schema";

export function useTopAttractions() {
    return useQuery<TopTouristAttractions[]>({
    queryKey: ["top-attractions"],
    queryFn: () => Promise.resolve(TOP_TOURIST_ATTRACTIONS),
    staleTime: Infinity,
  });
}

export function useTopAttraction(id: number) {
  return useQuery<TopTouristAttractions[]>({
    queryKey: ["top-attractions"],
    queryFn: () => Promise.resolve(TOP_TOURIST_ATTRACTIONS.filter(attraction => attraction.destinationId === id)),
    enabled: !!id,
    staleTime: Infinity,
  });
}