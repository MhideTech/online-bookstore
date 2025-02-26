import React from "react";
import {
  Search,
  Home,
  Book,
  Clock,
  Bookmark,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MoreVertical,
} from "lucide-react";

interface BookThumbnail {
  id: number;
  title: string;
  subtitle?: string;
  author?: string;
  coverImage: string;
  publisher?: string;
}

const Books: React.FC = () => {
  // Sample book data
  const books: BookThumbnail[] = [
    {
      id: 1,
      title: "Beauty and the Beast",
      subtitle: "Disney",
      coverImage: "/api/placeholder/220/300",
      publisher: "Disney",
    },
    {
      id: 2,
      title: "Fire and Blood - A Game of Thrones series",
      coverImage: "/api/placeholder/220/300",
    },
    {
      id: 3,
      title: "The Chronicles of Narnia",
      coverImage: "/api/placeholder/220/300",
    },
    {
      id: 4,
      title: "Deadpool Samurai",
      subtitle: "edition",
      coverImage: "/api/placeholder/220/300",
      publisher: "Marvel",
    },
    {
      id: 5,
      title: "A Le...",
      subtitle: "The...",
      coverImage: "/api/placeholder/220/300",
    },
  ];

  const currentProgress = {
    current: 4,
    total: 60,
  };

  const featuredAuthor = {
    name: "George RR Martin",
    role: "author",
    avatar: "/api/placeholder/70/70",
    description:
      '"Fire and Blood" tells the story of the Targaryen dynasty in Westeros, chronicling the conquest of the Seven Kingdoms by House Targaryen. It also covers the Targaryen civil war known as the Dance of the Dragons.',
  };

  const currentUser = {
    name: "Alexander Mark",
    avatar: "/api/placeholder/36/36",
  };

  return (
    <div className="flex h-screen bg-stone-50">
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

      <div className="flex-1 flex flex-col overflow-hidden">
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
            <span className="hidden md:block font-medium">
              {currentUser.name}
            </span>
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

        <main className="flex-1 overflow-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Keep the story going..
              </h1>
              <p className="text-gray-700 mb-6">
                Don't let the story end just yet. Continue reading your last
                book and immerse yourself in the world of literature.
              </p>
              <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-md">
                Start reading
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm max-w-md">
              <div className="flex items-start mb-4">
                <img
                  src={featuredAuthor.avatar}
                  alt={featuredAuthor.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{featuredAuthor.name}</h3>
                  <p className="text-gray-500 text-sm">{featuredAuthor.role}</p>
                </div>
                <button className="ml-auto">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-700 text-sm">
                {featuredAuthor.description}
              </p>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="flex overflow-x-auto pb-4 gap-4 scroll-smooth hide-scrollbar">
              {books.map((book) => (
                <div key={book.id} className="flex-shrink-0 w-40 md:w-48">
                  <div className="mb-2">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-56 md:h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-medium text-sm">{book.title}</h3>
                  {book.subtitle && (
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{book.subtitle}: </span>
                      {book.publisher && (
                        <span className="font-medium ml-1">
                          {book.publisher}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 text-sm">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              <span>Got chance to check out the </span>
              <span className="text-rose-500 mx-1">new collection</span>
              <span>
                of Harry Potter? It's a must-read for any fan of the series,
                don't miss out!
              </span>
            </div>
            <div className="font-medium">
              <span className="text-rose-500">{currentProgress.current}</span>
              <span className="text-gray-500">
                /{currentProgress.total} books
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Books;
