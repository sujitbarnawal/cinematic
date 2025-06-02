import Navbar from "./components/Navbar";
import FavouriteMovies from "./pages/FavouriteMovies";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourite-movies" element={<FavouriteMovies/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
