import { Phone, Shield, Star, Map } from "lucide-react";
import { DESTINATION_IDS } from "./id";

export const HERO_SECTION_HEADINGS = {
  subtitle: "Explore Pakistan",
  title: "Art of Traveling",
  title_highlight: "North",
  description: "Redefining premium travel experiences in Pakistan",
};


export const WEBSITE_NAME = "The North Affairs";

export const WHY_BOOK_WITH_US_CARDS = [
  {
    icon: Phone,
    title: "24/7 Local Support",
    description: "Our team is always ready to assist you across Pakistan, any time of day.",
  },
  {
    icon: Shield,
    title: "Secure Bookings",
    description: "All payments are fully secure and protected with an option of installments.",
  },
  {
    icon: Star,
    title: "Handpicked Destinations",
    description: "Explore the most beautiful locations in North of Pakistan.",
  },
  {
    icon: Map,
    title: "Customizable Trips",
    description: "Tailor your travel experience to your preferences, whether adventure or relaxation.",
  },
];

export const TOP_DESTINATIONS = [
  {
    id: DESTINATION_IDS.SKARDU,
    title: "Skardu, Gilgit-Baltistan",
    images: ["/skardu.webp", "/deosai.JPG", "/khaplu_fort.JPG", "/sadpara.WEBP", "/shigar_fort.WEBP", "/upper_kachura.JPG", "boating.WEBP", "sarfranga.JPG"],
  }
];