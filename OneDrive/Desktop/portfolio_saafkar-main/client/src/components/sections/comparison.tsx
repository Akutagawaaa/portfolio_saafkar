import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const beforeAfterImages = [
  {
    before:
      "https://images.unsplash.com/photo-1633038891130-fb2a48edf1f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after:
      "https://images.unsplash.com/photo-1621217899086-01f0e603009e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Interior Transformation",
  },
  {
    before:
      "https://images.unsplash.com/photo-1536796423601-e9733a86d257?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after:
      "https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exterior Excellence",
  },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="py-24 bg-gradient-to-b from-black to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Saafkar Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the remarkable transformation we bring to every vehicle we
            touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-black/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {item.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={item.before}
                          alt="Before"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        Before
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={item.after}
                          alt="After"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        After
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
