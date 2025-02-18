import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import Home from "./pages/Home";
import CardCarousel from "./ui/Card";
// import CardCarousel from "./ui/Card";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-primary">
      <Navbar />
      <CardCarousel />

      <br /><br /><br />
      <Home />
      <br /><br /><br />
      <h1 className="text-3xl font-bold underline bg-primary">Hello World!</h1>
      <div className="w-40 h-44 bg-primary text-secondary">Hiiiii</div>
      <button onClick={toggleTheme} className="p-2 m-4 border rounded">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      
    </div>
  );
}
