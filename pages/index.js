


export default function Home() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Dictionary App
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover the power of language with our cutting-edge dictionary
              app. With over 100,000 meticulously curated entries and intuitive
              search functionality, you'll never be at a loss for words again.
              Our app also includes clear pronunciation guides and real-world
              examples, ensuring that you not only understand the meaning of a
              word, but know how to use it correctly in any context. Start your
              linguistic journey today and unleash your full potential with our
              comprehensive dictionary app.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.pixabay.com/photo/2020/04/28/18/33/key-5105878__480.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}






