import React from "react";
import { Truck, Shield, Clock, Headphones, BookOpen, Star } from "lucide-react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description:
        "Free delivery on orders over $25. Fast and reliable shipping to your doorstep.",
      color: "bg-book-blue",
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description:
        "Your payment information is protected with bank-level security encryption.",
      color: "bg-book-orange",
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description:
        "Shop anytime, anywhere. Our online store never closes for your convenience.",
      color: "bg-book-pink",
    },
    {
      id: 4,
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "Get personalized book recommendations from our knowledgeable staff.",
      color: "bg-accent",
    },
    {
      id: 5,
      icon: <BookOpen className="w-8 h-8" />,
      title: "Vast Collection",
      description:
        "Over 10,000 books across all genres, from bestsellers to hidden gems.",
      color: "bg-secondary",
    },
    {
      id: 6,
      icon: <Star className="w-8 h-8" />,
      title: "Quality Guarantee",
      description:
        "All books are carefully inspected to ensure you receive the best quality.",
      color: "bg-book-orange",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Bookie?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best book shopping experience with
            unmatched service and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border text-center hover:transform hover:-translate-y-2"
            >
              <div
                className={`${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Book Community
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with fellow book lovers, share reviews, and discover
                your next favorite read. Get exclusive access to author events,
                early releases, and special discounts.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Join Community
                </button>
                <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Books Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
