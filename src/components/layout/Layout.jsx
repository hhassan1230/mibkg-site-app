import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useHashScroll } from "@/hooks/useHashScroll";

export default function Layout() {
  useHashScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
