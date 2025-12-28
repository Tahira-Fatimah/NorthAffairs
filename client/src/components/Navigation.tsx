import { Link, useLocation } from "wouter";
import { MapPin, Calendar, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Destinations", icon: MapPin },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-5px_10px_rgba(0,0,0,0.03)] pb-safe-area">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} className="w-full">
              <div
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 py-2 cursor-pointer transition-all duration-200",
                  isActive 
                    ? "text-primary scale-105" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6 transition-transform duration-200",
                    isActive && "fill-current"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="text-[10px] font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
