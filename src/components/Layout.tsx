import Navigation from "./Navigation";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;