import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Comparison from "@/components/sections/comparison";
import Testimonials from "@/components/sections/testimonials";
import Locations from "@/components/sections/locations";
import Waitlist from "@/components/sections/waitlist";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Comparison />
        <Locations />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}