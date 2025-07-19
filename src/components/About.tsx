import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Gem } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every piece is meticulously created by skilled artisans who pour their passion into each design."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest materials including ethically sourced gems and precious metals."
    },
    {
      icon: Gem,
      title: "Unique Designs",
      description: "Each piece is one-of-a-kind, ensuring you own something truly special and exclusive."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            About Shreenathji Jewelry
          </h2>
          <p className="text-lg text-navy-light max-w-3xl mx-auto leading-relaxed">
            Founded by master craftsman Rajesh Sharma in 2010, Shreenathji Jewelry is a family-owned business 
            rooted in traditional Indian jewelry making techniques. With over 15 years of experience, 
            Rajesh combines ancient artistry with contemporary designs to create pieces that celebrate 
            India's rich cultural heritage while meeting modern aesthetic preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-luxury rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Our Legacy & Vision
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Based in Jaipur, the heart of India's jewelry craftsmanship, our workshop combines time-honored 
            techniques passed down through generations with modern precision. Each piece reflects our commitment 
            to preserving Indian artisanal traditions while creating contemporary jewelry that resonates with 
            today's discerning customers. We take pride in using ethically sourced materials and supporting 
            local artisan communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;