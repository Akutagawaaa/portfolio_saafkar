import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur border-b" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <img 
            src="/assets/images/logo.png" 
            alt="Saafkar Logo" 
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#comparison" className="hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#testimonials" className="hover:text-primary transition-colors">
            Testimonials
          </a>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#comparison"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Button
                asChild
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}