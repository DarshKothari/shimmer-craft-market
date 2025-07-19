import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@shreenathji.jewelry",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      description: "Monday to Saturday, 10AM - 8PM"
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      detail: "Johari Bazaar, Jaipur, Rajasthan",
      description: "By appointment preferred"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      detail: "Mon-Sat: 10AM-8PM",
      description: "Sunday: 11AM-6PM"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Have a custom design in mind? Want to learn more about our pieces? 
            We'd love to hear from you and help bring your jewelry dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                <p className="font-medium text-gold mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-luxury">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-navy-light mb-6 leading-relaxed">
                  Whether you're looking for the perfect engagement ring, a special gift, 
                  or want to commission a custom piece, we're here to make your vision a reality. 
                  Our team of expert craftspeople will work with you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" className="flex-1">
                    Schedule Consultation
                  </Button>
                  <Button variant="elegant" size="lg" className="flex-1">
                    Custom Design
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-hero p-6 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Custom Design Process</h4>
                  <ul className="text-sm text-navy-light space-y-1">
                    <li>• Consultation & Design Concept</li>
                    <li>• 3D Rendering & Approval</li>
                    <li>• Handcrafting Process</li>
                    <li>• Final Polishing & Delivery</li>
                  </ul>
                </div>
                <div className="bg-gradient-gold p-6 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Free Services</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Jewelry Cleaning & Inspection</li>
                    <li>• Sizing & Minor Repairs</li>
                    <li>• Authenticity Certificates</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;