import CardCarousel from "../ui/Card";
import Navbar from "../ui/Navbar";

export default function Home() {
  const icons = {
    children: "👶",
    history: "📚",
    fiction: "🤖",
    thriller: "👻",
    romance: "❤️",
    comics: "💥",
  };
  return (
    <div>
      <CardCarousel />
      <section className="h-screen bg-amber-200 overflow-y-hidden">
        <Navbar />

        <section className="grid grid-cols-3 px-28">
          <div className="h-auto flex flex-col justify-center col-span-2 pe-30 gap-5">
            <h1 className="text-6xl font-bold leading-20 tracking-wide">
              Find the Perfect Book, <br /> for your Leisure Time...
            </h1>
            <p className="text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              veniam totam iste commodi fugiat, explicabo cum omnis quaerat modi
              rerum facere sequi ducimus similique tempora? Quis qui molestias
              sed rerum?
            </p>
            <button className="inline-flex bg-black text-white w-fit px-7 py-3 text-lg">
              Find a Book
            </button>
          </div>
          <div className="flex relative gap-6 items-center justify-center">
            <div
              className="w-24 bg-red-300 h-[650px] relative flex flex-col items-center py-5 rotate-[16deg] top-10 right-20"
              style={{
                boxShadow: "8px 10px 0px 1px rgb(0, 0, 0)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <p className="uppercase -rotate-90 absolute bottom-48 text-5xl">
                Classic
              </p>
            </div>

            <div
              className="w-24 bg-orange-300 h-[700px] relative flex flex-col items-center py-5 rotate-[10deg] top-5 right-10"
              style={{
                boxShadow: "8px 10px 0px 1px rgb(0, 0, 0)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <p className="uppercase -rotate-90 absolute bottom-48 text-5xl">
                Fiction
              </p>
            </div>

            <div
              className="w-24 bg-blue-300 h-[750px] relative flex flex-col items-center py-5 rotate-6"
              style={{
                boxShadow: "8px 10px 0px 1px rgb(0, 0, 0)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <p className="uppercase -rotate-90 absolute bottom-48 text-5xl">
                Comic
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="w-10/12 mx-auto bg-accent py-16 px-12">
        <div className="flex justify-between gap-20 my-10">
          <h1 className="shrink-0 text-3xl">
            About <br />
            Online BookStore
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            adipisci! Delectus rem alias reprehenderit aliquam! Obcaecati in
            laudantium nihil ratione minus esse quisquam corporis tempore, iste
            maxime tenetur dolor aliquam eaque, labore ducimus perferendis ut
            quae, doloribus autem. Vel corporis distinctio ea expedita ex
            possimus consequatur nisi impedit provident earum.
          </p>
        </div>
        <div className="bg-primary p-8 grid grid-cols-3 justify-between rounded-md">
          <div></div>
          <div className="col-span-2 bg-secondary border-secondary py-20 px-12 rounded-md">
            <div className="flex">
              <h1 className="text-3xl">
                The <br /> Redar's Library
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-8 bg-white">
        <h1 className="text-3xl font-bold text-brown-600 mb-6">Book Types</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(icons).map(([type, icon]) => (
            <div key={type} className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full h-24 w-24 flex items-center justify-center text-4xl">
                {icon}
              </div>
              <span className="mt-2 text-gray-700 font-medium capitalize">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-10/12 mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">What's inside the book</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu...
            </p>
            <ul className="space-y-2 grid grid-cols-2">
              <li className="flex items-center">
                <span className="mr-2">📚</span> Design Principles
              </li>
              <li className="flex items-center">
                <span className="mr-2">📕</span> UI Design
              </li>
              <li className="flex items-center">
                <span className="mr-2">📙</span> Typography
              </li>
              <li className="flex items-center">
                <span className="mr-2">📘</span> White Space
              </li>
              <li className="flex items-center">
                <span className="mr-2">📗</span> Usability
              </li>
              <li className="flex items-center">
                <span className="mr-2">📓</span> Color Theory
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="path/to/illustration.png"
              alt="Illustration"
              className="w-64 h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
