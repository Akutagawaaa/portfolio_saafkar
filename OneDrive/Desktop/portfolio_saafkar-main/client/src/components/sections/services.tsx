import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Timer, Shield } from "lucide-react";

const services = [
  {
    title: "Exterior Clean",
    description: "Professional exterior cleaning service for a spotless finish",
    icon: Sparkles,
    image: "/assets/images/services/exterior_cleaning.png",
  },
  {
    title: "Express Clean (Coming Soon)",
    description: "Quick but thorough cleaning service for busy professionals",
    icon: Timer,
    image: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9",
  },
  {
    title: "Complete Shine",
    description: "Comprehensive cleaning service for interior and exterior perfection",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the finest car cleaning services with our expert team and
            premium products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-black/50 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      Professional Equipment
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      Premium Products
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      Experienced Team
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}