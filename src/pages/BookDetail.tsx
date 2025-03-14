import {
  Bookmark,
  Share2,
  Download,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";

export default function BookDetail() {
  const { books } = useBooks();
  const { Id } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  // const newId = +Id - 1;
  console.log(Id);

  const book = books.find((book) => book.id == Id);
  console.log(book);

  return (
    <div className="flex flex-col w-full relative">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mt-6 text-gray-600 hover:text-gray-900 absolute left-8 cursor-pointer underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Books
      </button>
      <main className="px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:grid md:grid-cols-2 mt-6 md:mt-10">
          <div className="flex justify-center mb-8 md:mb-0 md:relative order-1 md:order-none">
            <div className="w-64 md:w-[300px] md:absolute mt-8 md:mt-0 md:right-0 md:me-10 lg:me-20">
              <img
                src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Harry Potter and the Half-Blood Prince"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-9/12 flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              {book.title}
            </h1>
            <p className="text-lg md:text-xl text-center md:text-left">
              {book.author}
            </p>

            <p className="text-gray-600 text-center md:text-left">
              Get ready to uncover the dark secrets and betrayals in the book. A
              thrilling adventure awaits you.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-300 px-4 md:px-10 lg:px-20 py-6 md:py-10 mt-6 md:mt-10 mb-6 md:mb-10">
          <div className="flex flex-col md:grid md:grid-cols-2 mb-8">
            <div></div>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8 md:mb-12 w-full md:w-10/12 border-b-2 border-gray-300 pb-6 md:pb-10">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto">
                <span>Start reading</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex justify-center sm:justify-start gap-3 mt-4 sm:mt-0">
                <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Download className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col md:grid md:grid-cols-2 md:gap-10 lg:gap-20">
            <section>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">
                The story takes place during Harry's sixth year at Hogwarts
                School of Witchcraft and Wizardry, where he discovers more about
                Lord Voldemort's past and the prophecy that foretells his
                defeat.
              </p>
              <p className="text-gray-600 mt-4">
                With action-packed sequences, shocking twists, and moments of
                heart-wrenching tragedy, "Half-Blood Prince" is a must-read for
                any fan of the Harry Potter series.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Roberto Jordan"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-2 text-center sm:text-left mt-2 sm:mt-0">
                  <h3 className="font-bold">Roberto Jordan</h3>
                  <p className="text-gray-600 italic">
                    "What a delightful and magical book it is! It indeed
                    transports readers to the wizarding world."
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 md:mt-0">
              <div className="grid gap-7">
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold">Editors</h3>
                  <p className="text-gray-600">
                    J.K. Rowling (author), Christopher Reath, Alena Gestabon,
                    Steve Korg
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold">Language</h3>
                  <p className="text-gray-600">Standard English (USA & UK)</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold">Paperback</h3>
                  <p className="text-gray-600">
                    paper textured, full colour, 345 pages
                  </p>
                  <p className="text-gray-600">ISBN: 987 3 32564 455 B</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
