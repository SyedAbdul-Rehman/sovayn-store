import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/products";
import { staggerContainer, cardHover, fadeIn } from "@/lib/animations";

export default function ProductGrid() {
  return (
    <section className="py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
        {...fadeIn}
      >
        Explore Our Products
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeIn}
            {...cardHover}
            className="h-full"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-blue-500/20 h-full transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                    ${product.price}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="bg-blue-500/5">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 transform transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}