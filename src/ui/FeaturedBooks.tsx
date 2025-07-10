import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
// import bookMindfulness from "@/assets/book-mindfulness.jpg";
// import bookDigital from "@/assets/book-digital.jpg";
// import bookCulinary from "@/assets/book-culinary.jpg";
// import bookSpace from "@/assets/book-space.jpg";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const FeaturedBooks: React.FC = () => {
  const featuredBooks: Book[] = [
    {
      id: 1,
      title: "The Art of Mindfulness",
      author: "Sarah Johnson",
      price: 24.99,
      rating: 4.8,
      coverImage: "bookMindfulness",
      category: "Self-Help",
      isNew: true,
    },
    {
      id: 2,
      title: "Digital Innovation",
      author: "Michael Chen",
      price: 32.99,
      rating: 4.6,
      coverImage: "bookDigital",
      category: "Technology",
      isBestseller: true,
    },
    {
      id: 3,
      title: "Culinary Adventures",
      author: "Isabella Rodriguez",
      price: 28.99,
      rating: 4.9,
      coverImage: "bookCulinary",
      category: "Cooking",
    },
    {
      id: 4,
      title: "Space Odyssey",
      author: "David Clarke",
      price: 26.99,
      rating: 4.7,
      coverImage: "bookSpace",
      category: "Science Fiction",
      isNew: true,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of the most popular and trending
            books across all genres
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {book.isNew && (
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {book.isBestseller && (
                    <span className="bg-book-orange text-primary text-xs font-semibold px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-card/80 rounded-full hover:bg-card transition-colors">
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-accent font-medium uppercase tracking-wide">
                    {book.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">
                  {book.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3">
                  by {book.author}
                </p>

                {renderStars(book.rating)}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-foreground">
                    ${book.price}
                  </span>
                  <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
