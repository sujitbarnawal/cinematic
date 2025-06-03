🎬 Cinematic App
A sleek and simple movie search and favorites management app powered by the OMDb API. Search for your favorite movies and save them for later!

🚀 Getting Started
You can run the app locally in just two steps:


# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev


# 🔍 Movie Search

Input field to type a movie title
Fetches movies from the OMDb API based on user input

Displays:
Movie poster,
Title,
Release year

Shows skeleton loaders while data is loading
Handles and displays any API or network errors

# ❤️ Favorites Management

* Each movie card includes a heart icon to:
* Add to Favorites (if not already favorited)
* Remove from Favorites (if already added)
* Separate section to display favorite movies
* Persists favorite list in localStorage so it's saved even after refresh
* Prevents duplicate movies in favorites



