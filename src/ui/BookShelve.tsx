import { ArrowRight } from "lucide-react";
import { useBooks } from "../contexts/BookContext";
import { useNavigate } from "react-router-dom";

export default function BookShelve({
  name,
  setFullShelve,
  setFullShelveBooks,
  setFullShelveName,
}: {
  name: string;
  setFullShelve: (value: boolean) => void;
  setFullShelveBooks: (value: []) => void;
  setFullShelveName: (value: string) => void;
}) {
  const { books } = useBooks();
  const navigate = useNavigate();

  const handleBookClick = (book) => {
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
              books.filter((book: { shelve: string }) => book.shelve === name)
            );
            setFullShelveName(name);
            console.log(name);
          }}
        >
          Full shelf <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
      <div className="relative">
        <div className="bg-[#C8C5BB] h-6 rounded w-full absolute bottom-0 z-10"></div>
        <div className="flex overflow-x-scroll no-scrollbar  overflow-y-hidden pb-6 gap-14 relative mx-3">
          {books
            .filter((book: { shelve: string }) => book.shelve === name)
            .map((book: { id: number; coverImage: string; title: string }) => (
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
    </div>
  );
}
