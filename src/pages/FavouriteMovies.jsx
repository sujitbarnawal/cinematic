import React, { useEffect, useState } from "react";
import FavouriteMovie from "@/components/FavouriteMovie";

function FavouriteMovies() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    setFavourites(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = favourites.filter((movie) => movie.imdbID !== id);
    setFavourites(updated);
    localStorage.setItem("favouriteMovies", JSON.stringify(updated));
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-center mt-4">Your Favourite Movies</h1>
      <div className="mt-8 py-2 px-4 h-[600px] overflow-y-auto hide-scrollbar">
        {favourites.length > 0 ? (
          <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favourites.map((movie, index) => (
              <FavouriteMovie
                key={movie.imdbID || index}
                movie={movie}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <p className="font-bold text-lg ml-5 mt-4">No favourite movies yet.</p>
        )}
      </div>
    </>
  );
}

export default FavouriteMovies;
