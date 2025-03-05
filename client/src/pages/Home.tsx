import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductGallery from "@/components/product/ProductGallery";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      <ProductHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center space-x-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Free Shipping
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            30-Day Returns
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            2-Year Warranty
          </Badge>
        </div>

        <ProductFeatures />

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Product Gallery
          </h2>
          <ProductGallery />
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array(5).fill(null).map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4">
                    "Amazing product! The SmartBand X has completely transformed how I approach my daily routine."
                  </p>
                  <p className="text-sm text-muted-foreground">- John D.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
