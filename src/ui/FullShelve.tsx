import { PanelRightClose } from "lucide-react";

interface FullShelveProps {
  books: []; // Replace `Book` with the actual type of your `books` array elements
  fullShelveName: string;
  setFullShelve: (value: boolean) => void; // Replace `any` with the appropriate type for the function
}

export default function FullShelve({
  books,
  fullShelveName,
  setFullShelve,
}: FullShelveProps) {
  return (
    <div className="w-3/12 p-6 bg-amber-50 border-l h-[90vh] overflow-y-scroll no-scrollbar transition-all ease-in duration-300">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{fullShelveName}</h1>
        <span
          onClick={() => {
            // console.log(fullShelve)
            setFullShelve(false);
          }}
        >
          <PanelRightClose />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-8">
        {books.map(
          (book: { id: number; coverImage: string; title: string }) => (
            <div key={book.id} className="flex-shrink-0 flex flex-col gap-3">
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
