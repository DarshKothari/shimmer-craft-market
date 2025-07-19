import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant handcrafted jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
          Elara
          <span className="block text-gold font-serif">Jewelry</span>
        </h1>
        <p className="text-xl md:text-2xl text-navy-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Handcrafted with passion, designed for elegance. 
          Each piece tells a unique story of artistry and timeless beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
            Explore Collection
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;