// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";

// const cards = [
//   {
//     title: "Stranger Things",
//     image: "src/assets/Screenshot1.png",
//     active: true,
//   },
//   { title: "You", image: "src/assets/Screenshot2.png" },
//   { title: "Bridgerton", image: "src/assets/Screenshot3.png" },
//   // { title: "The Morning Show", image: "/images/the-morning-show.jpg" },
//   // { title: "Emily in Paris", image: "/images/emily-in-paris.jpg" },
// ];

// const CardCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev - 1 + cards.length) % cards.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col gap-10 h-screen overflow-hidden">
//       <Navbar />
//       <h1 className="text-6xl font-piedra font-bold text-center">
//         Find the perfect book for <br /> your leisure time
//       </h1>
//       <div className="relative flex items-center justify-center">
//         <div className="relative w-[800px] h-[400px] flex items-center justify-center mt-20">
//           <AnimatePresence>
//             {cards.map((card, i) => {
//               const isActive = i === index;
//               const isLeft = (i - index + cards.length) % cards.length === 1;
//               const isRight = (index - i + cards.length) % cards.length === 1;

//               return (
//                 <motion.div
//                   key={card.title}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity: isActive ? 1 : 0.5,
//                     scale: isActive ? 1 : 0.8,
//                     x: isLeft ? -150 : isRight ? 150 : 0,
//                     zIndex: isActive ? 10 : 5,
//                     rotate: isLeft ? -20 : isRight ? 20 : 0,
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className={`absolute w-[280px] h-[480px] bg-cover bg-center rounded-xl shadow-xl ${
//                     isActive ? "scale-100" : "scale-90 opacity-50"
//                   }`}
//                   style={{ backgroundImage: `url(${card.image})` }}
//                 ></motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardCarousel;




import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  coverStyle: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Stranger Things",
    author: "Netflix Series",
    coverStyle: "bg-red-900",
  },
  { id: 2, title: "You", author: "Caroline Kepnes", coverStyle: "bg-gray-700" },
  {
    id: 3,
    title: "The Office",
    author: "TV Series",
    coverStyle: "bg-blue-600",
  },
  {
    id: 4,
    title: "Inception",
    author: "Christopher Nolan",
    coverStyle: "bg-amber-700",
  },
  {
    id: 5,
    title: "Mystery Novel",
    author: "Unknown Author",
    coverStyle: "bg-purple-800",
  },
];

const CardCarousel = () => {
  const [activeBook, setActiveBook] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find the perfect book for
            <br />
            <span className="bg-gradient-to-r from-primary to-accent-warm bg-clip-text text-transparent">
              your leisure time
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover your next favorite read from our curated collection of books, 
            series, and entertainment that will transport you to new worlds.
          </p>

          {/* Interactive Book Display */}
          <div className="mb-12">
          <div className="relative w-full max-w-4xl mx-auto h-96 flex items-center justify-center">
      {/* Background image for reference */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="src/assets/Screenshot1.png"
          alt="Book collection"
          className="max-h-full max-w-full object-contain opacity-70"
        />
      </div>

      {/* Interactive book overlay */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {books.map((book, index) => {
          const isActive = activeBook === book.id;
          const isOtherHovered = activeBook !== null && activeBook !== book.id;

          return (
            <div
              key={book.id}
              className={`
                relative cursor-pointer transition-all duration-300 ease-out
                ${isActive ? "z-20 animate-book-focus" : "z-10"}
                ${isOtherHovered ? "filter blur-sm opacity-60" : ""}
                ${!activeBook ? "animate-book-float" : ""}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setActiveBook(book.id)}
              onMouseLeave={() => setActiveBook(null)}
            >
              <div
                className={`
                  w-20 h-28 rounded-lg shadow-lg transform transition-all duration-300
                  ${book.coverStyle}
                  ${
                    isActive
                      ? "shadow-2xl scale-110 -translate-y-2"
                      : "shadow-md"
                  }
                  hover:shadow-xl
                `}
              >
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/20 to-transparent p-2 flex flex-col justify-between">
                  <div className="text-white text-xs font-semibold leading-tight">
                    {book.title}
                  </div>
                  <div className="text-white/80 text-xs">{book.author}</div>
                </div>
              </div>

              {/* Glow effect for active book */}
              {isActive && (
                <div className="absolute inset-0 rounded-lg bg-book-gold/20 blur-xl scale-150 -z-10"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              // size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg"
            >
              Browse Books
            </button>
            <button 
              // variant="outline" 
              // size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              View Collections
            </button>
          </div>
        </div>
      </main>
      </div>

    
  );
};

export default CardCarousel;
