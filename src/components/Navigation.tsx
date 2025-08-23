import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#1C3049] backdrop-blur-sm fixed w-full z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/lovable-uploads/ab7aac31-80e9-4d23-a35f-8773a90a9640.png" 
              alt="TANIV Group Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-4 py-2 rounded-md text-md font-medium transition-all duration-300 font-crimson ${
                    isActive(item.path)
                      ? "bg-white/20 text-white font-semibold backdrop-blur-sm"
                      : "text-white/90 hover:bg-white/15 hover:text-white hover:font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/15 hover:text-white transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-business-dark rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 font-crimson ${
                    isActive(item.path)
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white/90 hover:bg-white/15 hover:text-white hover:font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;