import { useState } from "react";
import { Button } from "./ui/button";

function FavouriteMovie({ movie, handleRemove }) {
  const [isLoading, setIsLoading] = useState(false);

  const removeFromFavourites = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    handleRemove(movie.imdbID);
    setIsLoading(false);
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
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
        <p className="text-sm text-gray-400 mb-1">Release Year: {movie.Year}</p>
        <Button
          variant={"destructive"}
          className={"mt-2 w-full cursor-pointer"}
          onClick={removeFromFavourites}
          disabled={isLoading}
        >
          {isLoading ? "Removing..." : "Remove"}
        </Button>
      </div>
    </div>
  );
}

export default FavouriteMovie;
