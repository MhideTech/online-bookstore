import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-primary border-b-2 border-bg-secondary text-accent z-50">
      <div className="flex gap-4 items-center">
        <div className="border-r-2 pe-6">
          <h1 className="text-4xl">Logo</h1>
        </div>

        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex gap-4 z-10">
        <NavLink to="app/books" className="px-7 py-3 text-accent">Get Started</NavLink>
      </div>
    </nav>
  );
}
