import CardCarousel from "../ui/Card";

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
