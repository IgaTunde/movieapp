import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieProvider from "./components/context/MovieContext";
import MovieDetailsProvider from "./components/context/MovieDetailsContext";

import MovieList from "./components/main/MovieList";
import MovieHeader from "./components/header/MovieHeader";
import SideBar from "./components/aside/SideBar";
import Hero from "./components/heroSection/Hero";
import DetailContainer from "./components/details/DetailContainer";

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="dark:bg-veryDarkBlueDarkModeBg dark:text-white text-gray-800 text-base ">
          <MovieHeader />
          <div className="flex justify-between">
            <SideBar />
            <div className="w-full">
              <Hero />
      <MovieDetailsProvider>
              <DetailContainer />
        </MovieDetailsProvider>
              <MovieList />
            </div>
          </div>
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
