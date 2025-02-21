import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const cards = [
  {
    title: "Stranger Things",
    image: "src/assets/Screenshot1.png",
    active: true,
  },
  { title: "You", image: "src/assets/Screenshot2.png" },
  { title: "Bridgerton", image: "src/assets/Screenshot3.png" },
  // { title: "The Morning Show", image: "/images/the-morning-show.jpg" },
  // { title: "Emily in Paris", image: "/images/emily-in-paris.jpg" },
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-10 h-screen overflow-hidden">
      <Navbar />
      <h1 className="text-6xl font-piedra font-bold text-center">
        Find the perfect book for <br /> your leisure time
      </h1>
      <div className="relative flex items-center justify-center">
        <div className="relative w-[800px] h-[400px] flex items-center justify-center mt-20">
          <AnimatePresence>
            {cards.map((card, i) => {
              const isActive = i === index;
              const isLeft = (i - index + cards.length) % cards.length === 1;
              const isRight = (index - i + cards.length) % cards.length === 1;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.8,
                    x: isLeft ? -150 : isRight ? 150 : 0,
                    zIndex: isActive ? 10 : 5,
                    rotate: isLeft ? -20 : isRight ? 20 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-[280px] h-[480px] bg-cover bg-center rounded-xl shadow-xl ${
                    isActive ? "scale-100" : "scale-90 opacity-50"
                  }`}
                  style={{ backgroundImage: `url(${card.image})` }}
                ></motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
