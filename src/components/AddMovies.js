import React, { useState } from "react";
import { ResultCard } from "./Result";


export const Add = () => {
  const key = `fc0c660a8c5eb0a6b19f40ca8d7c945d`
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {result.length > 0 && (
            <ul className="results">
              {result.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} setResult ={setResult} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}; 


  
