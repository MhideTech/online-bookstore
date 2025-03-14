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

  return (
    <div className="flex">
      <div className="flex flex-1 h-[90vh] overflow-y-scroll no-scrollbar">
        <div className="flex-1 overflow-x-hidden no-scrollbar px-4 md:px-8 py-6">
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
          fullShelveBooks={fullShelveBooks}
          fullShelveName={fullShelveName}
          setFullShelve={setFullShelve}
        />
      )}
    </div>
  );
}
