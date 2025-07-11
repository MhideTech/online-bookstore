import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Book = {
  id: string | number;
  title: string;
  subtitle?: string;
  publisher?: string;
  coverImage: string;
};

interface SearchBookProps {
  books: Book[];
}

export default function SearchBook({ books }: SearchBookProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    if (isFocused) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFocused]);

  return (
    <div className="">
      <div className="relative w-full md:w-auto flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search in My library"
            className="w-[400px] py-2 pl-10 pr-4 bg-white rounded-full border border-gray-200 focus:outline-none"
            onFocus={() => setIsFocused(true)}
          />
        </div>
        {isFocused && (
          <div
            className="fixed w-11/12 left-10 top-40 mx-auto h-96 inset-0 bg-gray-50 z-50 p-10"
            onClick={() => setIsFocused(false)}
          >
            <div className="grid grid-cols-6">
              {search.length >= 1 &&
                books
                  .filter((book) =>
                    book.title.toLowerCase().startsWith(search.toLowerCase())
                  )
                  .map((book) => (
                    <div key={book.id} className={`mx-auto w-44`}>
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
                            <span className="font-medium ml-1">
                              {book.publisher}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
