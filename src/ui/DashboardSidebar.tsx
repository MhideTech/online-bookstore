import { Book, Bookmark, Clock, Home, Settings } from "lucide-react";

export default function DashboardSidebar() {
  return (
    <div className="hidden md:flex flex-col items-center justify-between py-6 px-3 border-r border-gray-200 w-20">
      <div className="flex flex-col items-center gap-6">
        <div className="mb-4">
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
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
          <Home className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center justify-center bg-rose-500 p-3 rounded-lg shadow-sm w-12 h-12">
          <Book className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
          <Clock className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
          <Bookmark className="w-6 h-6 text-gray-600" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm w-12 h-12">
        <Settings className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
}
