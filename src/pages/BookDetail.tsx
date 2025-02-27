import { Bookmark, Share2, Download, ArrowRight } from "lucide-react";

export default function BookDetail() {
  return (
    <div className="flex bg-[#F1EEE3]">
      <main className="px-20">
        <div className="grid grid-cols-2 mt-10">
          <div className="relative">
            <div className="absolute w-[300px] flex-shrink-0 right-0 me-20">
              <img
                src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Harry Potter and the Half-Blood Prince"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="w-9/12  flex flex-col gap-8">
            <h1 className="text-5xl font-serif">
              Harry Potter: Half Blood Prince
            </h1>
            <p className="text-xl">JK Rowling</p>

            <p className="text-gray-600">
              Get ready to uncover the dark secrets and betrayals in the book. A
              thrilling adventure awaits you.
            </p>
          </div>
        </div>

        <div className="bg-[#fdfbf7] px-20 py-10 mt-10 mb-10">
          <div className="grid grid-cols-2">
            <div></div>
            <div className="flex justify-between gap-4 mb-12 w-10/12 border-b-2 border-[#F1EEE3] pb-10">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                <span>Start reading</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex gap-3">
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

          <div className="space-y-8 grid grid-cols-2 gap-20">
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
              <div className="flex items-center gap-4 mt-10">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Roberto Jordan"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Roberto Jordan</h3>
                  <p className="text-gray-600 italic">
                    "What a delightful and magical book it is! It indeed
                    transports readers to the wizarding world."
                  </p>
                </div>
              </div>
            </section>

            <section>
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
