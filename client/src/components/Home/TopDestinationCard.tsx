import { useEffect, useRef, useState } from "react";

interface TopDestinationCardProps {
  title: string;
  images: string[];
}

export default function TopDestinationCard({
  title,
  images,
}: TopDestinationCardProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Detect reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /**
   * 1️⃣ Observe visibility of the card
   */
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // start slideshow when 50% visible
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  /**
   * 2️⃣ Slideshow logic (only when visible)
   */
  useEffect(() => {
    if (!isVisible) return;
    if (prefersReducedMotion) return;
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [isVisible, images.length, prefersReducedMotion]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full"
    >
      {/* Image / Slideshow */}
      <div className="relative h-56 w-full">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Card content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
