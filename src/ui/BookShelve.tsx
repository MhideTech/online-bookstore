import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../contexts/BookmarkContext";
import { BookInterface } from "../contexts/BookContext";

export default function BookShelve({
  name,
  setFullShelve,
  setFullShelveBooks,
  setFullShelveName,
}: {
  name: string;
  setFullShelve: (value: boolean) => void;
  setFullShelveBooks: (value: BookInterface[]) => void;
  setFullShelveName: (value: string) => void;
}) {
  const { bookmarks } = useBookmark();
  const navigate = useNavigate();

  const handleBookClick = (book: {
    id: string;
    coverImage?: string;
    title?: string;
  }) => {
    navigate(`/app/bookmark/${book.id}`);
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-amber-800 font-medium">{name}</h2>
        <a
          href="#"
          className="flex items-center text-gray-500 text-sm"
          onClick={() => {
            setFullShelve(true);
            setFullShelveBooks(
              bookmarks
                .filter(
                  (book) => book.shelve !== undefined && book.shelve === name
                )
                .map((book) => ({ ...book, shelve: book.shelve as string }))
            );
            setFullShelveName(name);
            console.log(name);
          }}
        >
          Full shelf <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
      <div className="relative">
        {bookmarks
          .map((book) => ({ ...book, id: book.id.toString() }))
          .filter(
            (book: { shelve?: string }) =>
              book.shelve !== undefined && book.shelve === name
          )
          .map((book: { id: string; coverImage: string; title: string }) => (
            <div
              key={book.id}
              className="flex-shrink-0"
              onClick={() => handleBookClick(book)}
            >
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
    // </div>
  );
}
