import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Home, SparkleIcon, CreditCard, Star, Leaf, Clock, UserCheck } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const teamMembers = [
  {
    name: "Nawed Perwez",
    role: "Co-Founder & COO",
    description: "Leading operations and service excellence at Saafkar",
    image: "/assets/images/team/nawed.png",
  },
  {
    name: "Monica Shrivastava",
    role: "Co-Founder & CEO",
    description: "Driving innovation and customer satisfaction in premium car care",
    image: "/assets/images/team/monica.jpeg",
  },
];

const workSteps = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Schedule a wash in just a few taps",
  },
  {
    icon: Home,
    title: "We Come to You",
    description: "Our cleaning experts arrive at your location, equipped with eco-friendly products",
  },
  {
    icon: SparkleIcon,
    title: "Premium Cleaning",
    description: "From exterior shine to deep interior cleaning, we ensure every inch of your car is spotless",
  },
  {
    icon: CreditCard,
    title: "Hassle-Free Payments",
    description: "Choose from secure online payment options",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "We leave only when your car looks as good as new!",
  },
];

const uspPoints = [
  {
    icon: Home,
    title: "Doorstep Convenience",
    description: "We bring the car spa to you!",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Cleaning",
    description: "Effective washes with minimal water wastage",
  },
  {
    icon: UserCheck,
    title: "Expert Technicians",
    description: "Trained professionals delivering top-tier results",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "No queues, no waiting—just seamless service",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20">
        {/* Mission Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground">
                To revolutionize the car cleaning industry by bringing premium,
                eco-friendly cleaning services directly to our customers' doorstep.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become the most trusted name in mobile car cleaning services,
                known for our commitment to quality, convenience, and customer
                satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Saafkar, we redefine car cleaning with effortless convenience, top-tier quality, 
                and professional service—right at your doorstep.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {workSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-primary/20 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your car deserves more than just a wash—it deserves Saafkar's complete care. 💜
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {uspPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <point.icon className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                          <p className="text-muted-foreground">{point.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Architects of Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the team behind Saafkar's success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {member.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                              {member.role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}