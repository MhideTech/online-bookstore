import { useState } from "react";
import FullShelve from "../ui/FullShelve";
import BookShelve from "../ui/BookShelve";
import SearchBook from "../ui/Search";

interface BookInterface {
  id: number;
  title: string;
  author?: string;
  coverImage: string;
  shelve: string;
}

export default function BookmarkUI() {
  const [fullShelve, setFullShelve] = useState(false);
  const [fullShelveBooks, setFullShelveBooks] = useState([]);
  const [fullShelveName, setFullShelveName] = useState("");

  const books: BookInterface[] = [
    {
      id: 1,
      title: "The Stars My Destination",
      author: "Alfred Bester",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Currently Reading",
    },
    {
      id: 2,
      title: "Deep Learning",
      author: "Ian Goodfellow",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Currently Reading",
    },
    {
      id: 3,
      title: "Strategic Writing for UX",
      author: "Torrey Podmajersky",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Currently Reading",
    },
    {
      id: 4,
      title: "Lietuvos Pauksciai",
      author: "Tomas Ivanauskas",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 6,
      title: "Epic Bike Rides of the World",
      author: "Lonely Planet",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 7,
      title: "Alice in Wonderland",
      author: "Lewis Carroll",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 8,
      title: "1984",
      author: "George Orwell",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 9,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Next Up",
    },
    {
      id: 10,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
    {
      id: 11,
      title: "Predictably Irrational",
      author: "Dan Ariely",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
    {
      id: 12,
      title: "One Year on a Bike",
      author: "Martijn Doolaard",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
    {
      id: 13,
      title: "101 Amazing Things to Do in Switzerland",
      author: "Travel Guide",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
    {
      id: 14,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
    {
      id: 15,
      title: "Logo Design Love",
      author: "David Airey",
      coverImage:
        "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      shelve: "Finished Book",
    },
  ];

  // // Book shelf component
  // const BookShelf = ({
  //   title,
  //   books,
  //   showFullShelf = true,
  // }: {
  //   title: string;
  //   books: BookInterface[];
  //   showFullShelf?: boolean;
  // }) => (
  //   <div className="mb-12">
  //     <div className="flex justify-between items-center mb-6">
  //       <h2 className="text-xl text-amber-800 font-medium">{title}</h2>
  //       {showFullShelf && (
  //         <a
  //           href="#"
  //           className="flex items-center text-gray-500 text-sm"
  //           onClick={() => setFullShelve((open) => !open)}
  //         >
  //           Full shelf <ArrowRight className="ml-1 w-4 h-4" />
  //         </a>
  //       )}
  //     </div>
  //     <div className="relative">
  //       <div className="bg-[#C8C5BB] h-6 rounded w-full absolute bottom-0 z-10"></div>
  //       <div className="flex overflow-x-scroll no-scrollbar  overflow-y-hidden pb-6 gap-14 relative mx-3">
  //         {books.map((book) => (
  //           <div key={book.id} className="flex-shrink-0">
  //             <img
  //               src={book.coverImage}
  //               alt={book.title}
  //               className="w-28 md:w-32 h-36 md:h-48 object-cover rounded shadow"
  //               style={{ boxShadow: "-4px 11px 7px 1px rgba(0,0,0,0.75)" }}
  //             />
  //             <p className="absolute z-10 truncate w-32 text-xs bottom-1 text-center">
  //               {book.title}
  //             </p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex">
      <div className="flex flex-1 h-[90vh] overflow-y-scroll no-scrollbar">
        {/* Main Content */}
        <div className="flex-1 overflow-x-hidden no-scrollbar px-4 md:px-8 py-6">
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

            <SearchBook books={books} />
          </div>

          {/* Book shelves
          <BookShelf
            title="Currently reading"
            books={currentlyReadingBooks}
            showFullShelf={false}
          />
          <BookShelf title="Next up" books={nextUpBooks} />
          <BookShelf title="Finished" books={finishedBooks} /> */}

          {/* <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl text-amber-800 font-medium">
                Currently Reading
              </h2>
              <a
                href="#"
                className="flex items-center text-gray-500 text-sm"
                onClick={() => {
                  setFullShelve((open) => !open);
                  setFullShelveBooks(
                    books.filter((book) => book.shelve === "Currently Reading")
                  );
                }}
              >
                Full shelf <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-[#C8C5BB] h-6 rounded w-full absolute bottom-0 z-10"></div>
              <div className="flex overflow-x-scroll no-scrollbar  overflow-y-hidden pb-6 gap-14 relative mx-3">
                {books
                  .filter((book) => book.shelve === "Currently Reading")
                  .map((book) => (
                    <div key={book.id} className="flex-shrink-0">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-28 md:w-32 h-36 md:h-48 object-cover rounded shadow"
                        style={{
                          boxShadow: "-4px 11px 7px 1px rgba(0,0,0,0.75)",
                        }}
                      />
                      <p className="absolute z-10 truncate w-32 text-xs bottom-1 text-center">
                        {book.title}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}

          <BookShelve
            name="Currently Reading"
            books={books}
            setFullShelve={setFullShelve}
            setFullShelveBooks={setFullShelveBooks}
            setFullShelveName={setFullShelveName}
          />

          <BookShelve
            name="Next Up"
            books={books}
            setFullShelve={setFullShelve}
            setFullShelveBooks={setFullShelveBooks}
            setFullShelveName={setFullShelveName}
          />
        </div>
      </div>

      {fullShelve && (
        <FullShelve
          books={fullShelveBooks}
          fullShelveName={fullShelveName}
          setFullShelve={setFullShelve}
        />
      )}
    </div>
  );
}
