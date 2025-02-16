export default function Navbar() {
  return (
    <nav className="flex justify-between bg-red-100 items-center px-8 py-4">
      <div className="flex gap-4 items-center">
        <div>
          <h1 className="text-4xl underline">Logo</h1>
        </div>
        <div className="border border-red-400"></div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Books</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-secondary text-primary">Login</button>
        <button className="px-4 py-2 bg-primary text-secondary">Sign Up</button>
      </div>
    </nav>
  );
}
