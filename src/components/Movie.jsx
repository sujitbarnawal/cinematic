import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function Movie({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    const exists = storedFavorites.some((fav) => fav.imdbID === movie.imdbID);
    setIsFavorite(exists);
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
    } else {
      updatedFavorites = [...storedFavorites, movie];
    }

    localStorage.setItem("favouriteMovies", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs mx-auto mb-6 hover:scale-105 transition-transform duration-300">
      <div className="h-60 bg-gray-700 flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={movie.Poster}
          alt="Poster"
        />
      </div>
      <div className="p-4 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">
           {movie.Title}
          </h2>
          <p className="text-sm text-gray-400 mb-1">
            Release Year: {movie.Year}
          </p>
        </div>
        <Button
          onClick={toggleFavorite}
          className="cursor-pointer bg-gray-800 hover:bg-gray-700"
        >
          <Heart
            size={24}
            color={isFavorite ? "white" : "gray"}
            fill={isFavorite ? "white" : "none"}
          />
        </Button>
      </div>
    </div>
  );
}

export default Movie;
