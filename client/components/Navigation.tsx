import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-all duration-300 font-medium relative";
    if (isActive(path)) {
      return `${baseClasses} text-qulas-blue font-semibold`;
    }
    return `${baseClasses} text-gray-700 hover:text-qulas-blue`;
  };

  const ActiveIndicator = ({ path }: { path: string }) => {
    if (!isActive(path)) return null;
    return (
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full"></div>
    );
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-qulas-blue to-qulas-purple bg-clip-text text-transparent">
              Qulas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClassName("/")}>
              Home
              <ActiveIndicator path="/" />
            </Link>
            <Link to="/services" className={getLinkClassName("/services")}>
              Services
              <ActiveIndicator path="/services" />
            </Link>
            <Link to="/about" className={getLinkClassName("/about")}>
              About
              <ActiveIndicator path="/about" />
            </Link>
            <Link to="/careers" className={getLinkClassName("/careers")}>
              Careers
              <ActiveIndicator path="/careers" />
            </Link>
            <Link to="/contact" className={getLinkClassName("/contact")}>
              Contact
              <ActiveIndicator path="/contact" />
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="ghost" 
                className={isActive("/login") ? "text-qulas-blue bg-qulas-blue/10" : "text-gray-700 hover:text-qulas-blue"}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className={
                  isActive("/signup") 
                    ? "bg-gradient-to-r from-qulas-blue-dark to-qulas-purple-dark text-white" 
                    : "bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark text-white"
                }
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-qulas-blue transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${getLinkClassName("/")} ${isActive("/") ? "bg-qulas-blue/10 px-3 py-2 rounded-lg" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`${getLinkClassName("/services")} ${isActive("/services") ? "bg-qulas-blue/10 px-3 py-2 rounded-lg" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`${getLinkClassName("/about")} ${isActive("/about") ? "bg-qulas-blue/10 px-3 py-2 rounded-lg" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/careers"
                className={`${getLinkClassName("/careers")} ${isActive("/careers") ? "bg-qulas-blue/10 px-3 py-2 rounded-lg" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`${getLinkClassName("/contact")} ${isActive("/contact") ? "bg-qulas-blue/10 px-3 py-2 rounded-lg" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant={isActive("/login") ? "default" : "outline"}
                    className={isActive("/login") ? "w-full bg-qulas-blue text-white" : "w-full"}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className={
                      isActive("/signup") 
                        ? "bg-gradient-to-r from-qulas-blue-dark to-qulas-purple-dark text-white w-full" 
                        : "bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark text-white w-full"
                    }
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
