import React, { useRef, useState, useEffect } from "react";
import WhyBookCard from "./WhyBookCard";
import { WHY_BOOK_WITH_US_CARDS } from "@/constants";

export default function WhyBookWithUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the active index based on scroll position
  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const children = containerRef.current.children;
    if (!children.length) return;

    // width of first card + gap
    const card = children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + 24; // 24px = space-x-6 gap
    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a card when clicking a dot
  const scrollToIndex = (idx: number) => {
    if (!containerRef.current) return;
    const children = containerRef.current.children;
    if (!children.length) return;

    const card = children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + 24; // same as above
    containerRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-5">
          Why Book With Us?
        </h2>

        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory"
        >
          {WHY_BOOK_WITH_US_CARDS.map((card, idx) => (
            <div key={idx} className="flex-shrink-0 w-72 snap-start">
              <WhyBookCard
                icon={<card.icon className="w-6 h-6 text-primary" />}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {WHY_BOOK_WITH_US_CARDS.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === activeIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
