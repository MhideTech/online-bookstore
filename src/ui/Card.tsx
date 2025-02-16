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
  { title: "The Morning Show", image: "/images/the-morning-show.jpg" },
  { title: "Emily in Paris", image: "/images/emily-in-paris.jpg" },
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);
  const totalCards = cards.length;
  const angleStep = 360 / totalCards; // Spread cards evenly in a circle

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="relative flex items-center justify-center h-[600px] w-full">
      {/* Previous Button */}
      <button
        onClick={prevCard}
        className="absolute left-10 z-20 p-3 bg-white/50 rounded-full shadow-lg"
      >
        ◀
      </button>

      {/* Carousel Container with Full Circular Spread */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <AnimatePresence>
          {cards.map((card, i) => {
            const angle = (i - index) * angleStep;
            const radians = (angle * Math.PI) / 180;

            // Circular position calculations
            const x = Math.sin(radians) * 400; // Adjust radius for more spread
            const z = Math.cos(radians) * 400; // Move cards back and forth
            const scale = z > 0 ? 1 : 0.8; // Reduce size of back cards
            const opacity = z > 0 ? 1 : 0.5; // Dim back cards
            const rotationY = `${-angle}deg`; // Rotate to face the front

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0 }}
                animate={{
                  opacity,
                  scale,
                  rotateY: rotationY,
                  x,
                  zIndex: z > 0 ? 10 : 5,
                }}
                transition={{ duration: 0.6 }}
                className="absolute w-[200px] h-[300px] bg-cover bg-center rounded-xl shadow-xl"
                style={{
                  backgroundImage: `url(${card.image})`,
                  transformOrigin: "center",
                }}
              ></motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextCard}
        className="absolute right-10 z-20 p-3 bg-white/50 rounded-full shadow-lg"
      >
        ▶
      </button>
    </div>
  );
};

export default CardCarousel;
