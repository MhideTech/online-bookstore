import { PanelRightClose } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BookInterface } from "../contexts/BookContext";

interface FullShelveProps {
  fullShelveBooks: BookInterface[];
  fullShelveName: string;
  setFullShelve: (value: boolean) => void;
}

export default function FullShelve({
  fullShelveBooks,
  fullShelveName,
  setFullShelve,
}: FullShelveProps) {
  const navigate = useNavigate();

  const handleBookClick = (book: { id: unknown; coverImage?: string; title?: string; }) => {
    navigate(`/app/bookmark/${book.id}`);
  };

  return (
    <div className="w-3/12 p-6 bg-white border-l h-[90vh] overflow-y-scroll no-scrollbar transition-all ease-in duration-300">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{fullShelveName}</h1>
        <span onClick={() => setFullShelve(false)}>
          <PanelRightClose />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-8">
        {fullShelveBooks.map(
          (book: { id: number; coverImage: string; title: string }) => (
            <div
              key={book.id}
              className="flex-shrink-0 flex flex-col gap-3"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-28 md:w-32 h-36 md:h-48 object-cover rounded shadow"
                style={{ boxShadow: "-3px 1px 7px 1px rgba(0,0,0,0.75)" }}
              />
              <p className="truncate w-32 text-xs text-center">{book.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
