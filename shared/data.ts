import type { Trip, TopActivities, TopTouristAttractions } from "./schema";
import { DESTINATION_IDS, ATTRACTION_IDS, ACTIVITY_IDS } from "../client/src/constants/id";

export const TRIPS: Trip[] = [
  {
    id: DESTINATION_IDS.SKARDU,
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
    id: ACTIVITY_IDS.JEEP_SAFARI,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Jeep Safari",
    description:
      "Jeep Safari in Skardu offers an adventurous way to explore the region’s rugged terrain, high-altitude landscapes, and remote valleys. Travelers ride in powerful 4x4 vehicles across rocky mountain roads, river crossings, and scenic plateaus. Popular routes include Deosai National Park, Shigar Valley, and surrounding off-road tracks that are inaccessible to regular vehicles. This activity is perfect for adventure seekers who want to experience Skardu’s raw natural beauty up close.",
    image: "/jeep_safari.JPG",
    quickInfo: {
      bestTime: "June – September",
      idealFor: ["Adventure Seekers", "Off-road Travel", "Photography"],
      duration: "2–6 hours",
    },
  },

  {
    id: ACTIVITY_IDS.PARAGLIDING,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Paragliding",
    description:
      "Paragliding in Skardu provides a thrilling aerial view of snow-capped peaks, winding rivers, and lush valleys. Flying high above the landscape allows travelers to witness Skardu’s breathtaking scenery from a unique perspective. Guided by experienced instructors, paragliding is conducted at selected safe locations with favorable wind conditions. It is an unforgettable experience for adrenaline lovers and those seeking a once-in-a-lifetime adventure.",
    image: "/paragliding.JPG",
    quickInfo: {
      bestTime: "May – August",
      idealFor: ["Adventure", "Aerial Photography", "Thrill Seekers"],
      duration: "30–60 minutes",
    },
  },

  {
    id: ACTIVITY_IDS.BOATING,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Boating",
    description:
      "Boating in Skardu is a relaxing activity enjoyed at scenic lakes such as Lower Kachura Lake (Shangrila Lake) and Sadpara Lake. Visitors can glide over crystal-clear waters surrounded by towering mountains and serene landscapes. Paddle boats and rowboats are commonly available, making this activity suitable for families, couples, and leisure travelers who want to enjoy peaceful moments in nature.",
    image: "/boating.WEBP",
    quickInfo: {
      bestTime: "April – September",
      idealFor: ["Relaxation", "Couples", "Photography"],
      duration: "20–40 minutes",
    },
  },

  {
    id: ACTIVITY_IDS.SIGHTSEEING,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Sightseeing",
    description:
      "Sightseeing in Skardu allows travelers to explore the region’s most iconic landmarks, including lakes, valleys, forts, and cultural sites. From historic places like Shigar Fort and Khaplu Fort to natural wonders such as Deosai Plains and Kachura Lakes, sightseeing offers a balanced travel experience combining nature, history, and local culture. It is ideal for first-time visitors who want to experience Skardu’s highlights at a comfortable pace.",
    image: "/sarfranga.JPG",
    quickInfo: {
      bestTime: "April – October",
      idealFor: ["First-time Visitors", "Families", "Photography"],
      duration: "Half day to full day",
    },
  },
];


export const TOP_TOURIST_ATTRACTIONS: TopTouristAttractions[] = [
  {
    id: ATTRACTION_IDS.LOWER_KACHURA,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Lower Kachura Lake",
    description:
      "Lower Kachura Lake, also known as Shangrila Lake, is a famous tourist destination located in Skardu, Gilgit-Baltistan, Pakistan. Surrounded by snow-capped mountains, green valleys, and crystal-clear blue water, the lake is one of the most photographed places in northern Pakistan. Location of Lower Kachura Lake Lower Kachura Lake is situated about 20 kilometers from Skardu city and lies close to Upper Kachura Lake. Its easy accessibility makes it a popular stop for tourists visiting Skardu Valley. Natural Beauty and Scenic Views The lake is well known for its heart-shaped appearance, serene atmosphere, and mirror-like water reflections. The surrounding landscape changes beautifully with the seasons, making it attractive year-round, especially during spring and summer. Shangrila Resort at Lower Kachura Lake The iconic Shangrila Resort Skardu is located on the lake’s edge and is one of the main attractions. The resort features traditional wooden cottages, a historic aircraft restaurant, and scenic lakeside gardens. Visitors can enjoy boating, photography, sightseeing, and peaceful walks around the lake.",
    image: "/skardu.webp",
    quickInfo: {
      bestTime: "April – September",
      idealFor: ["Sightseeing", "Photography", "Boating", "Relaxation"],
      duration: "1–2 hours",
    },
  },

  {
    id: ATTRACTION_IDS.UPPER_KACHURA,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Upper Kachura Lake",
    description:
      "Upper Kachura Lake is a stunning alpine lake located near Skardu, Gilgit-Baltistan, Pakistan. Known for its deep blue waters, peaceful surroundings, and untouched natural beauty, Upper Kachura Lake is one of the most serene tourist attractions in the Skardu Valley. Location of Upper Kachura Lake Upper Kachura Lake is situated about 22 kilometers from Skardu city and lies a short distance above Lower Kachura Lake (Shangrila Lake). Reaching the lake requires a brief hike, which adds to its charm and keeps it less crowded. Natural Beauty and Scenic Landscape Surrounded by rugged mountains, pine trees, and clear skies, Upper Kachura Lake offers breathtaking panoramic views. The water is remarkably clear and deep, changing shades of blue throughout the day. Its calm environment makes it ideal for visitors seeking peace and nature.",
    image: "/upper_kachura.JPG",
    quickInfo: {
      bestTime: "May – September",
      idealFor: ["Nature Walks", "Photography", "Peaceful Retreat"],
      duration: "2–3 hours",
    },
  },

  {
    id: ATTRACTION_IDS.SHIGAR_VALLEY,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Shigar Valley",
    description:
      "Shigar Valley is a breathtaking valley located in Skardu, Gilgit-Baltistan, Pakistan. Famous for its dramatic mountain scenery, fertile fields, historic landmarks, and traditional Balti culture, Shigar Valley is considered the gateway to the Karakoram mountain range. Location of Shigar Valley Shigar Valley lies about 30 kilometers from Skardu city and is easily accessible by road. The valley stretches along the Shigar River and leads toward some of the world’s highest peaks, including K2, Broad Peak, and Gasherbrum. Natural Beauty and Landscape The valley is surrounded by towering mountains, glaciers, green farmlands, and flowing streams. In spring and summer, Shigar Valley transforms into a lush green paradise, while autumn brings golden colors that attract photographers and nature lovers. Shigar Fort – A Historic Landmark One of the main attractions is the historic Shigar Fort, also known as Fong-Khar. Restored and converted into a heritage hotel, the fort reflects traditional Balti architecture and offers insight into the region’s rich history and culture.",
    image: "/shigar_fort.WEBP",
    quickInfo: {
      bestTime: "April – October",
      idealFor: ["Cultural Exploration", "Photography", "Sightseeing"],
      duration: "Half day",
    },
  },

  {
    id: ATTRACTION_IDS.SATPARA_DAM,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Satpara Dam",
    description:
      "Sadpara Lake is a beautiful natural lake located near Skardu, Gilgit-Baltistan, Pakistan. Surrounded by barren mountains and wide open landscapes, the lake is an important source of water and electricity for Skardu and a popular spot for tourists seeking scenic views and tranquility. Location of Sadpara Lake Sadpara Lake is situated about 8 kilometers south of Skardu city, making it one of the most easily accessible lakes in the region. The lake lies on the route toward Deosai National Park. Natural Beauty and Scenic Landscape The lake’s deep blue waters contrast strikingly with the rugged brown mountains that surround it. The open setting, fresh mountain air, and panoramic views make Sadpara Lake an excellent place for photography and sightseeing, especially during sunrise and sunset. Importance of Sadpara Lake Sadpara Lake plays a vital role in providing drinking water and hydroelectric power to Skardu. It is formed by the Sadpara Dam and is one of the key infrastructure projects in the area.",
    image: "/sadpara.WEBP",
    quickInfo: {
      bestTime: "May – September",
      idealFor: ["Photography", "Sightseeing", "Sunset Views"],
      duration: "1 hour",
    },
  },

  {
    id: ATTRACTION_IDS.DEOSAI,
    destinationId: DESTINATION_IDS.SKARDU,
    title: "Deosai National Park",
    description:
      "Deosai National Park is one of the most unique and breathtaking natural destinations in Gilgit-Baltistan, Pakistan. Known as the “Land of Giants,” Deosai is the second-highest plateau in the world, located at an average elevation of about 4,114 meters (13,497 feet) above sea level. Location of Deosai National Park Deosai National Park lies between Skardu, Astore, and Kharmang districts and is easily accessible from Skardu via Sadpara Lake during the summer season. Natural Beauty and Landscape Deosai is famous for its vast open plains, rolling grasslands, crystal-clear streams, and snow-covered peaks. In summer, the plateau comes alive with wildflowers, green meadows, and flowing rivers, offering some of the most stunning scenery in northern Pakistan. Wildlife and Biodiversity Deosai National Park is home to diverse wildlife, including the Himalayan brown bear, Tibetan wolf, red fox, golden marmot, and rare bird species.",
    image: "/deosai.JPG",
    quickInfo: {
      bestTime: "June – August",
      idealFor: ["Wildlife Watching", "Photography", "Nature Exploration"],
      duration: "Full day",
    },
  },

  {
    id: ATTRACTION_IDS.KHAPLU_FORT,
      destinationId: DESTINATION_IDS.SKARDU,
    title: "Khaplu Fort",
    description:
      "Khaplu Valley is a beautiful and historic valley located in Gilgit-Baltistan, Pakistan, near the town of Khaplu. Known for its lush landscapes, ancient forts, flowing rivers, and rich Balti culture, Khaplu Valley is one of the most charming destinations in the Skardu region. Location of Khaplu Valley Khaplu Valley lies about 100 kilometers east of Skardu city, along the Shyok River. It serves as the gateway to several important trekking routes and high mountain regions in the eastern Karakoram. Natural Beauty and Scenic Landscape The valley is famous for its green fields, apricot orchards, snow-capped peaks, and clear mountain streams. In spring and summer, Khaplu Valley turns vibrant with blossoms, while autumn offers stunning golden views. Khaplu Fort – A Historic Treasure One of the main attractions is Khaplu Fort (Yabgo Khar), a beautifully preserved 19th-century palace that showcases traditional Balti architecture. Today, the fort functions as a heritage hotel and museum, attracting visitors interested in history and culture.",
    image: "/khaplu_fort.JPG",
    quickInfo: {
      bestTime: "April – October",
      idealFor: ["History Lovers", "Photography", "Cultural Tourism"],
      duration: "1–2 hours",
    },
  },
];


/**
 * Get all trips
 */
export function getTrips(): Trip[] {
  return TRIPS;
}

export function getTripById(id: string): Trip | undefined {
  return TRIPS.find(trip => trip.id === id);
}




