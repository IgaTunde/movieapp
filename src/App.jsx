import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieProvider from "./components/context/MovieContext";
import TopProvider from "./components/context/TopRatedContext";
import MovieList from "./components/main/MovieList";
import MovieHeader from "./components/header/MovieHeader";
import SideBar from "./components/aside/SideBar";
import Hero from "./components/heroSection/Hero";
import DetailContainer from "./components/details/DetailContainer";
import TopRated from "./components/aside/TopRated";
import Upcoming from "./components/aside/Upcoming";
import GenreList from "./components/aside/GenreList";
;

function App() {
  return (
    <Router>
      <TopProvider>
        <MovieProvider>
          <div className="dark:bg-veryDarkBlueDarkModeBg dark:text-white text-gray-800 text-base ">
            <MovieHeader />
            <div className="flex justify-between">
              <SideBar />
              <div className="w-full pt-[70px] md:pt-[100px]">
                <Routes>
                  <Route path="/" element={<MovieList />} />
                  <Route path="/topRated" element={<TopRated />} />
                  <Route path="/upcoming" element={<Upcoming />} />
                  <Route path="/:movieId" element={<DetailContainer />} />
                  <Route path="/genre/:genreId" element={<GenreList />} />
                </Routes>
                <Hero />
              </div>
            </div>
          </div>
        </MovieProvider>
      </TopProvider>
    </Router>
  );
}

export default App;
