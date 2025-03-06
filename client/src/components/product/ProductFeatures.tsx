import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Brain, Gauge, Watch } from "lucide-react";
import { staggerContainer, fadeIn, cardHover } from "@/lib/animations";

const features = [
  {
    icon: Brain,
    title: "AI-powered monitoring",
    description: "Advanced algorithms that learn and adapt to your lifestyle"
  },
  {
    icon: Watch,
    title: "OLED Display",
    description: "Crystal clear curved display with touch controls"
  },
  {
    icon: Battery,
    title: "7-Day Battery",
    description: "Long-lasting battery with fast charging capability"
  },
  {
    icon: Gauge,
    title: "Real-time Tracking",
    description: "Instant health and fitness metrics at your fingertips"
  }
];

export default function ProductFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
          {...fadeIn}
        >
          Revolutionary Features
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              {...cardHover}
            >
              <Card className="bg-card/50 backdrop-blur border-blue-500/20 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <feature.icon className="h-10 w-10 text-blue-500 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}