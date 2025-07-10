import React from "react";
import {
  BookOpen,
  Brain,
  Heart,
  Zap,
  Globe,
  Palette,
  Users,
  TrendingUp,
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  bookCount: number;
  color: string;
  description: string;
}

const BrowseCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Fiction",
      icon: <BookOpen className="w-8 h-8" />,
      bookCount: 2847,
      color: "bg-book-pink",
      description: "Immerse yourself in captivating stories and adventures",
    },
    {
      id: 2,
      name: "Science & Technology",
      icon: <Brain className="w-8 h-8" />,
      bookCount: 1523,
      color: "bg-book-blue",
      description: "Explore the latest in innovation and scientific discovery",
    },
    {
      id: 3,
      name: "Romance",
      icon: <Heart className="w-8 h-8" />,
      bookCount: 1876,
      color: "bg-book-pink",
      description: "Love stories that will warm your heart",
    },
    {
      id: 4,
      name: "Self-Help",
      icon: <Zap className="w-8 h-8" />,
      bookCount: 987,
      color: "bg-book-orange",
      description: "Transform your life with practical wisdom",
    },
    {
      id: 5,
      name: "Travel",
      icon: <Globe className="w-8 h-8" />,
      bookCount: 654,
      color: "bg-accent",
      description: "Discover new places and cultures",
    },
    {
      id: 6,
      name: "Art & Design",
      icon: <Palette className="w-8 h-8" />,
      bookCount: 432,
      color: "bg-book-orange",
      description: "Creative inspiration for artists and designers",
    },
    {
      id: 7,
      name: "Biography",
      icon: <Users className="w-8 h-8" />,
      bookCount: 789,
      color: "bg-secondary",
      description: "Real stories of extraordinary people",
    },
    {
      id: 8,
      name: "Business",
      icon: <TrendingUp className="w-8 h-8" />,
      bookCount: 1245,
      color: "bg-book-blue",
      description: "Strategies for success and growth",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse by Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your next great read by exploring our diverse collection of
            book categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border cursor-pointer hover:transform hover:-translate-y-1"
            >
              <div
                className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {category.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">
                  {category.bookCount.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">books</span>
              </div>

              <div className="mt-4 text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                Explore Collection →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Browse All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
