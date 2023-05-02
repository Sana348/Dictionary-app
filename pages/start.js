import React, { useState, useEffect } from "react";

const Start = () => {
  const [word, setWord] = useState("Dictionary App");
  const [meaning, setMeaning] = useState(
    "Welcome to our dictionary app homepage! Our comprehensive dictionary contains over 100,000 words and their definitions. Whether you're looking to expand your vocabulary or simply clarify a word's meaning, our user-friendly interface makes it easy to search and navigate. Additionally, we offer pronunciation guides and examples of each word in context to help you better understand how to use them in conversation. Start exploring our vast collection of words today and discover a whole new world of language!"
  );
  const [audio, setAudio] = useState();

  const getMeaning = async () => {
    let res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let response = await res.json();
    console.log(response);
    let meaningText = response[0]?.meanings[0]?.definitions[0]?.definition;

    setAudio(response[0]?.phonetics[0]?.audio);
    setMeaning(meaningText);
  };

  useEffect(() => {
    setAudio(null); // reset audio state when word changes
  }, [word]);

  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
    }
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              {word}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {meaning}
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full flex-col mx-auto px-8 sm:px-0">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="word" className="leading-7 text-sm text-gray-400">
                Type a word
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="full-name"
                name="word"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="my-4 flex justify-between">
              <button
                onClick={getMeaning}
                className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              >
                Meaning
              </button>
              {audio && (
                <div className="w-full sm:w-60 md:w-80 mx-auto">
                  <audio controls className="w-full h-10">
                    <source src={audio} type="audio/ogg" />
                    Your browser doesn't support the audio tag
                  </audio>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Start;



