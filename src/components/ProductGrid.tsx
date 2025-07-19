import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import goldEarrings from "@/assets/gold-earrings.jpg";
import silverBracelet from "@/assets/silver-bracelet.jpg";
import diamondRing from "@/assets/diamond-ring.jpg";

const products = [
  {
    id: 1,
    name: "Golden Grace Earrings",
    price: "$245",
    image: goldEarrings,
    description: "Handcrafted gold earrings with intricate detailing"
  },
  {
    id: 2,
    name: "Silver Serenity Bracelet",
    price: "$185",
    image: silverBracelet,
    description: "Elegant silver bracelet with precious gemstones"
  },
  {
    id: 3,
    name: "Diamond Essence Ring",
    price: "$850",
    image: diamondRing,
    description: "Stunning diamond ring with handcrafted band"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Discover our most beloved pieces, each handcrafted with meticulous attention to detail and designed to capture hearts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold">
                    {product.price}
                  </span>
                  <Button variant="luxury" className="px-6">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;