import { Menu, Search } from "lucide-react";

export default function DashboardNavbar() {
  // Current user
  const currentUser = {
    name: "Alexander Mark",
    avatar:
      "https://th.bing.com/th/id/R.3567f63f3800f37dc44de20b37daa79a?rik=BT416g5s9Piixg&pid=ImgRaw&r=0",
  };
  
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200">
      <div className="flex md:hidden">
        <Menu className="w-6 h-6 text-gray-700" />
      </div>
      <div className="flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search book name, author, edition ..."
            className="w-full py-2 pl-10 pr-4 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-9 h-9 rounded-full"
          />
        </div>
        <span className="hidden md:block font-medium">{currentUser.name}</span>
        <div className="relative">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
