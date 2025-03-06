import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-0" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            Sovayn SmartBand X
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The future of wearable technology. AI-powered fitness & productivity band that adapts to your lifestyle.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - $149.99
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
            alt="SmartBand X"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
