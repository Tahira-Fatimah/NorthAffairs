import type { Trip, TopActivities, TopTouristAttractions } from "./schema";

export const TRIPS: Trip[] = [
  {
    id: 1,
    title: "Skardu",
    description: "Skardu is a city in the Gilgit-Baltistan region of Pakistan. It is the capital of Skardu District and the headquarters of Skardu Division.",
    startDate: "April 2026",
    endDate: "April 2026",
    price: "US$4495pp",
    availability: "Early Bird Discount",
    itinerary: [
      "Lahore to Chilas",
      "Chilas to Skardu",
      "Lower and Upper Kachura lake",
      "Deosai National Park and Sheosar",
      "Back To Chilas",
      "Chilas to Lahore"
    ],
    featured: true,
    images: ["/skardu.webp", "/hunza.jpg"]
  }
];

export const TOP_ACTIVITIES: TopActivities[] = [
  {
    id: 1,
    destinationId: 1,
    title: "Jeep Safari",
    image: "/jeep_safari.JPG"
  },
  {
    id: 2,
    destinationId: 1,
    title: "Paragliding",
    image: "/paragliding.JPG"
  },
  {
    id: 3,
    destinationId: 1,
    title: "Boating",
    image: "/boating.WEBP"
  },
  {
    id: 4,
    destinationId: 1,
    title: "Sightseeing",
    image: "/sarfranga.JPG"
  }
];

export const TOP_TOURIST_ATTRACTIONS: TopTouristAttractions[] = [
  {
    id: 1,
    destinationId: 1,
    title: "Lower Kachura Lake",
    image: "/skardu.webp"
  },
  {
    id: 2,
    destinationId: 1,
    title: "Upper Kachura Lake",
    image: "/upper_kachura.JPG"
  },
  {
    id: 3,
    destinationId: 1,
    title: "Shigar Valley",
    image: "/shigar_fort.WEBP"
  },
  {
    id: 4,
    destinationId: 1,
    title: "Satpara Dam",
    image: "/sadpara.WEBP"
  },
  {
    id: 5,
    destinationId: 1,
    title: "Deosai National Park",
    image: "/deosai.JPG"
  },
  {
    id: 6,
    destinationId: 1,
    title: "Khaplu Fort",
    image: "/khaplu_fort.JPG"
  },
];  
/**
 * Get all trips
 */
export function getTrips(): Trip[] {
  return TRIPS;
}

/**
 * Get a trip by ID
 */
export function getTripById(id: number): Trip | undefined {
  return TRIPS.find(trip => trip.id === id);
}



