import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Hyundai Creta Owner",
    content:
      "The attention to detail is incredible. My car looks better than when I first bought it!",
    rating: 5
  },
  {
    name: "Priya Verma",
    role: "Maruti Suzuki Baleno Owner",
    content:
      "Professional service from start to finish. The ceramic coating has kept my car looking pristine.",
    rating: 5
  },
  {
    name: "Rajesh Iyer",
    role: "Tata Harrier Owner",
    content:
      "Worth every penny. The team treats your car like their own. Exceptional service!",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "Mahindra XUV700 Owner",
    content:
      "I'm amazed by the transformation. The interior feels brand new again.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Honda City Owner",
    content:
      "Highly recommend! The polishing and detailing made my car look showroom-new.",
    rating: 5
  },
  {
    name: "Ananya Desai",
    role: "Toyota Fortuner Owner",
    content:
      "Fantastic job! The deep cleaning was beyond expectations. Will book again.",
    rating: 5
  },
  {
    name: "Manoj Nair",
    role: "Kia Seltos Owner",
    content:
      "Superb service! The team was professional, and my car has never looked better.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
