import { useState } from "react";
import FullShelve from "../ui/FullShelve";
import BookShelve from "../ui/BookShelve";
import SearchBook from "../ui/Search";
import { useBookmark } from "../contexts/BookmarkContext";

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

  const { bookmarks } = useBookmark();
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

            <SearchBook books={bookmarks} />
          </div>

          <BookShelve
            name="Currently Reading"
            books={bookmarks}
            setFullShelve={setFullShelve}
            setFullShelveBooks={setFullShelveBooks}
            setFullShelveName={setFullShelveName}
          />

          <BookShelve
            name="Next Up"
            books={bookmarks}
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
