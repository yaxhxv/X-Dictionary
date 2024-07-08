import React, { useState } from "react";

const dictionaryData = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm,
    );

    if (foundWord) {
      setSearchResult(
        <div>
          <p>
            <strong>Definition:</strong>
          </p>
          <p>{foundWord.meaning}</p>
        </div>
      );
    } else {
      setSearchResult(
        <div>
          <p>
            <strong>Definition:</strong>
          </p>
          <p>Word not found in the dictionary.</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
       
        <input
          type="text"
          placeholder="Search for a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
       
      {searchResult && <div>{searchResult}</div>}
    </div>
  );
};



// return (
//   <div>
//     <h1>Dictionary App</h1>
//     <form onSubmit={handleSearch}>
//       <input type="text"
//       placeholder="Search for a word..."
//       value={searchTerm} 
//       onChange={handleSearch}/>
//       <button type="submit">Submit</button>
//     </form>
//     <h3>Definition:</h3>
//     <p>{searchResult}</p>
//   </div>
// );
 

export default Dictionary;