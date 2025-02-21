export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-purple-950 border-b-2 border-bg-secondary text-accent">
      <div className="flex gap-4 items-center">
        <div className="border-r-2 pe-6">
          <h1 className="text-4xl">Logo</h1>
        </div>

        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Books</li>
        </ul>
      </div>
      <div className="flex gap-4 z-10">
        <button className="px-7 py-3 text-accent">Get Started</button>
      </div>
    </nav>
  );
}
