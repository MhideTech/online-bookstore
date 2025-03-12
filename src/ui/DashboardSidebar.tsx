import { Book, Bookmark, Clock, Home, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="hidden md:flex flex-col items-center justify-between py-6 px-3 border-r border-gray-200 ">
      <div className="flex flex-col items-center justify-between gap-10 dashboard-sidebar">
        <div className="">
          <svg
            className="w-10 h-10 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 16V4a2 2 0 00-2-2H6a2 2 0 00-2 2v16l6-3 6 3V16" />
            <path d="M8 10C8 8.89543 8.89543 8 10 8V8C11.1046 8 12 8.89543 12 10V10" />
          </svg>
        </div>

        <NavLink
          to="books"
          className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12"
        >
          <Home className="w-5 text-gray-600" />
        </NavLink>
        <NavLink
          to="book-detail"
          className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12"
        >
          <Book className="w-5 text-gray-600" />
        </NavLink>
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
          <Clock className="w-5 text-gray-600" />
        </div>
        <NavLink
          to="bookmark"
          className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12"
        >
          <Bookmark className="w-5 text-gray-600" />
        </NavLink>
      </div>
      <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
        <Settings className="w-5 text-gray-600" />
      </div>
    </div>
  );
}
