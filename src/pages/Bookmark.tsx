import { Search, ArrowRight } from "lucide-react";

interface BookInterface {
  id: number;
  title: string;
  author?: string;
  coverImage: string;
}

export default function BookmarkUI() {
  // Book data for each shelf
  const currentlyReadingBooks: BookInterface[] = [
    {
      id: 1,
      title: "The Stars My Destination",
      author: "Alfred Bester",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Deep Learning",
      author: "Ian Goodfellow",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Strategic Writing for UX",
      author: "Torrey Podmajersky",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const nextUpBooks: BookInterface[] = [
    {
      id: 4,
      title: "Lietuvos Pauksciai",
      author: "Tomas Ivanauskas",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Epic Bike Rides of the World",
      author: "Lonely Planet",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Alice in Wonderland",
      author: "Lewis Carroll",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "1984",
      author: "George Orwell",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const finishedBooks: BookInterface[] = [
    {
      id: 10,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      title: "Predictably Irrational",
      author: "Dan Ariely",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      title: "One Year on a Bike",
      author: "Martijn Doolaard",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      title: "101 Amazing Things to Do in Switzerland",
      author: "Travel Guide",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      title: "Logo Design Love",
      author: "David Airey",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Book shelf component
  const BookShelf = ({
    title,
    books,
    showFullShelf = true,
  }: {
    title: string;
    books: BookInterface[];
    showFullShelf?: boolean;
  }) => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-amber-800 font-medium">{title}</h2>
        {showFullShelf && (
          <a href="#" className="flex items-center text-gray-500 text-sm">
            Full shelf <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
      <div className="relative">
        <div className="bg-[#C8C5BB] h-6 rounded w-full absolute bottom-0 z-10"></div>
        <div className="flex  overflow-y-hidden pb-4 gap-14 no-scrollbar relative mx-3">
          {books.map((book) => (
            <div key={book.id} className="flex-shrink-0">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-28 md:w-32 h-36 md:h-48 object-cover rounded shadow"
                style={{ boxShadow: "-4px 11px 7px 1px rgba(0,0,0,0.75)" }}
              />
              <p className="absolute z-10 truncate w-32 text-xs bottom-1 text-center">
                {book.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-amber-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto px-4 md:px-8 py-6">
        {/* Top navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-amber-100 rounded-full text-amber-800 font-medium">
              Shelves
            </button>
            <button className="px-4 py-2 bg-white rounded-full text-gray-700">
              All Books
            </button>
          </div>

          <div className="w-full md:w-auto flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search in My library"
              className="w-[400px] py-2 pl-10 pr-4 bg-white rounded-full border border-gray-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Book shelves */}
        <BookShelf
          title="Currently reading"
          books={currentlyReadingBooks}
          showFullShelf={false}
        />
        <BookShelf title="Next up" books={nextUpBooks} />
        <BookShelf title="Finished" books={finishedBooks} />
      </div>
    </div>
  );
}
