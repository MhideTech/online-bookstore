import { useEffect, useState } from "react";

export default function ModeToggleBtn() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <button onClick={toggleTheme} className="p-2 m-4 border rounded">
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

