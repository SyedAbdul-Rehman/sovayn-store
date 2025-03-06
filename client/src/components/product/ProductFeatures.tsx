import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Brain, Gauge, Watch } from "lucide-react";

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
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Revolutionary Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-blue-500/20">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
