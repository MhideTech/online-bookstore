import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-primary">Hello World!</h1>
      <div className="w-40 h-44 bg-primary text-secondary">Hiiiii</div>
      <button onClick={toggleTheme} className="p-2 m-4 border rounded">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      
    </div>
  );
}
