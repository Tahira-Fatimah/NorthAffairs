import React from "react";

interface WhyBookCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyBookCard({ icon, title, description }: WhyBookCardProps) {
  return (
    <div className="flex flex-col items-center h-[25vh] text-center p-6 bg-white rounded-xl shadow-md gap-3">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
