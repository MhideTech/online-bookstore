import {
  Clock,
  // ChevronLeft,
  // ChevronRight,
  // ArrowRight,
  MoreVertical,
  ArrowDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BookInterface, useBooks } from "../contexts/BookContext";

// interface BookThumbnail {
//   id: number;
//   title: string;
//   subtitle?: string;
//   author?: string;
//   coverImage: string;
//   publisher?: string;
// }

export default function Books() {
  const navigate = useNavigate();
  const { books } = useBooks();

  const handleBookClick = (book: BookInterface) => {
    navigate(`/app/books/${book.id}`);
  };

  const currentProgress = {
    current: 4,
    total: 60,
  };

  // Featured author
  const featuredAuthor = {
    name: "George RR Martin",
    role: "author",
    avatar:
      "https://th.bing.com/th/id/R.3567f63f3800f37dc44de20b37daa79a?rik=BT416g5s9Piixg&pid=ImgRaw&r=0",
    description:
      '"Fire and Blood" tells the story of the Targaryen dynasty in Westeros, chronicling the conquest of the Seven Kingdoms by House Targaryen. It also covers the Targaryen civil war known as the Dance of the Dragons.',
  };

  return (
    <div className="flex-1 flex flex-col py-10">
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto px-4 md:px-8 ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12">
          <div className="mb-6 md:mb-0 md:max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Keep the story going..
            </h1>
            <p className="text-gray-700 mb-6">
              Don't let the story end just yet. Continue reading your last book
              and immerse yourself in the world of literature.
            </p>
            <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-md">
              Find a Book
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Featured Author Card */}
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

        {/* Book Carousel */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-baseline my-20  gap-8 md:gap-12 scroll-smooth hide-scrollbar">
          {books.map((book) => (
            <div
              key={book.id}
              className={`mx-auto w-44`}
              onClick={() => handleBookClick(book)}
            >
              <div
                className={`mb-5 h-64 bg-red-300`}
                style={{
                  boxShadow: "-10px 13px 13px 1px rgba(0, 0, 0, 0.29)",
                }}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
              <h3 className="font-bold text-base">{book.title}</h3>
              {book.subtitle && (
                <div className="flex items-center text-sm text-gray-500">
                  <span>{book.subtitle}: </span>
                  {book.publisher && (
                    <span className="font-medium ml-1">{book.publisher}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8 text-sm">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span>Got chance to check out the </span>
            <span className="text-rose-500 mx-1">new collection</span>
            <span>
              of Harry Potter? It's a must-read for any fan of the series, don't
              miss out!
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
  );
}
