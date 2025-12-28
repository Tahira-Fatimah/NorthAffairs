import { useTrips } from "@/hooks/use-trips";
import { TripCard } from "@/components/Trip/TripCard";
import { motion } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import WhyBookWithUs from "@/components/Home/WhyBookUs";
import TopDestinations from "@/components/Home/TopDestinations";

export default function Home() {
  const { data: trips, isLoading, isError } = useTrips();

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    return (
      <Error message="Failed to load destinations." />
    );
  }

  return (
    <div className="pb-10 bg-background min-h-screen">
      <HeroSection />
      <WhyBookWithUs />
      <TopDestinations />
    </div>
  );
}
