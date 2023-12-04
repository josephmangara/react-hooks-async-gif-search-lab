import React from "react";

export default function GifSearch({ filterGifs, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter gif name"
          value={filterGifs}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Find Gif</button>
        </div>
      </div>
      <ul className="list-unstyled">
        {Array.isArray(filterGifs) && filterGifs.map((gifs, index) => (
          <li key={index}>
            <img src={gifs.images.original.url} alt="new gifs" className="img-fluid" />
          </li>
        ))}
      </ul>
    </form>
  );
}
