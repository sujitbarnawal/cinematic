
import FavouriteMovie from "@/components/FavouriteMovie";
import React, { useEffect, useState } from "react";

function FavouriteMovies() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    setFavourites(stored);
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl text-center mt-4">Your Favourite Movies</h1>
      <div className="mt-8 py-2 px-4 h-[600px] overflow-y-auto hide-scrollbar">
        {favourites.length > 0 ? (
          <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favourites.map((movie, index) => (
              <FavouriteMovie movie={movie} key={movie.imdbID || index} />
            ))}
          </div>
        ) : (
          <p className="font-bold text-lg ml-5 mt-4 ">No favourite movies yet.</p>
        )}
      </div>
    </>
  );
}

export default FavouriteMovies;
