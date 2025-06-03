import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Movie from "./Movie";
import axios from "axios";

function SearchMovies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const myKey = "982f5c1e" ;

  const handleSearch = async () => {
    setHasSearched(true);

    if (!search.trim()) {
      setSearchTerm("");
      setMovies([]);
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://omdbapi.com/?apikey=${myKey}&s=${search}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
      setSearchTerm(search);
      setSearch("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-4 flex flex-col max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="mt-4 flex">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search a movie"
            className="w-[250px] sm:w-[400px] md:w-[500px] rounded-full text-white placeholder:text-white rounded-r-none py-4 bg-gray-600"
          />
          {isLoading?
          <Button
            disabled={true}
            className="border-none w-fit cursor-pointer rounded-full rounded-l-none py-3 ml-[-2px]"
          >
            Searching...
          </Button>:
          <Button
            onClick={handleSearch}
            className="border-none w-fit cursor-pointer rounded-full rounded-l-none py-3 ml-[-2px]"
          >
            Search
          </Button>
          }
          
        </div>
      </div>

      {isLoading ? (
        <MoviesSkeleton />
      ) : hasSearched ? (
        <>
          {searchTerm ? (
            <>
              <div className="px-6 mt-6">
                <h2 className="text-xl font-semibold">
                  Search results for "{searchTerm}"
                </h2>
              </div>
              {movies.length === 0 ? (
                <p className="text-2xl font-semibold px-10 mt-10">
                  No movies found
                </p>
              ) : (
                <div className="mt-6 px-4 h-[600px] py-2 overflow-y-auto hide-scrollbar">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {movies.map((movie, index) => (
                      <Movie movie={movie} key={index} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-2xl font-semibold px-10 mt-10 text-red-500">
              Please enter a movie name or description
            </p>
          )}
        </>
      ) : null}
    </>
  );
}

export default SearchMovies;


const MoviesSkeleton = () => {
  return (
    <div className="mt-8 px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 animate-pulse rounded-2xl shadow-lg overflow-hidden w-full max-w-xs mx-auto mb-6"
          >
            <div className="h-60 bg-gray-700" />
            <div className="p-4 space-y-2">
              <div className="h-6 bg-gray-600 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
