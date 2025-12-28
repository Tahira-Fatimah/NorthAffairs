import { ReactNode } from "react";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import { BottomNav } from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <ScrollToTop />
      <TopHeader />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <BottomNav /> */}
    </div>
  );
}
