import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const nextCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="flex flex-col gap-10 py-20">
      <h1 className="text-6xl font-piedra font-bold text-center">
        Find the perfect book for you
      </h1>
      <div className="relative flex items-center justify-center ">
        {/* Left Button */}
        <button
          onClick={prevCard}
          className="absolute left-5 p-2 bg-white/50 rounded-full shadow-lg"
        >
          ◀
        </button>

        <div className="relative w-[800px] h-[400px] flex items-center justify-center ">
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
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-[280px] h-[380px] bg-cover bg-center rounded-xl shadow-xl ${
                    isActive ? "scale-100" : "scale-90 opacity-50"
                  }`}
                  style={{ backgroundImage: `url(${card.image})` }}
                ></motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextCard}
          className="absolute right-5 p-2 bg-white/50 rounded-full shadow-lg"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
