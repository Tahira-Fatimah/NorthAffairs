import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { WEBSITE_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/constants/shared";

export default function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative py-6 px-6 bg-secondary/30 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="w-9 h-9 text-primary animate-pulse" />
          {/* <img className="w-10 h-10" src="favicon.jpeg">
          </img> */}
          <h1 className="text-2xl font-bold tracking-wide text-foreground">
            {WEBSITE_NAME}
          </h1>
        </Link>

        {/* Hamburger button */}
        <button
          className="p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-72 z-50",
          "bg-background/80 backdrop-blur-xl",
          "border-l border-border",
          "shadow-2xl",
          "transform transition-all duration-300 ease-out",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">{WEBSITE_NAME}</span>
          </div>
          <button
            className="p-2 rounded-md hover:bg-muted transition"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-4 py-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
          group flex items-center gap-3
          rounded-lg px-4 py-3
          text-base font-medium
          text-foreground
          hover:bg-primary/10 hover:text-primary
          transition-all
        "
            >
              <item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
