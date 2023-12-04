import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifList, setGifList] = useState([]);
  const [filterGifs, setFilterGifs] = useState([]);

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=jRiKWcFUtbDgW2nNLcrc5r9Rwvi3soDi")
      .then(response => response.json())
      .then(data => {
        const gifs = data.data || [];
        const limitedGifList = gifs.slice(0, 3);
        setGifList(limitedGifList);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${filterGifs}&api_key=jRiKWcFUtbDgW2nNLcrc5r9Rwvi3soDi`)
      .then(response => response.json())
      .then(data => {
        const gifs = data.data || [];
        setFilterGifs(gifs);
        console.log("Search results:", gifs);
      });
    // Clear the input field after submitting
    setFilterGifs("");
  };

  const handleChange = event => {
    setFilterGifs(event.target.value);
  };

  return (
    <div className="container mt-4">
     <div className="row">
        <div className="col-md-7">
          <GifList gifList={gifList} />
        </div>
        <div className="col-md-5">
          <GifSearch handleChange={handleChange} handleSubmit={handleSubmit} filterGifs={filterGifs} />
        </div>       
     </div>
    </div>
  );
}
