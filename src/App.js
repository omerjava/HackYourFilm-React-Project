import "./App.css";
import Film from "./components/film/Film.jsx";
import { AllContext } from "./context/AllContext";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import FilmList from "./components/filmList/FilmList";

function App() {
  const [film, setFilm] = useState([]);
  const [filmList, setFilmList] = useState([]);
  const [filmDetails, setFilmDetails] = useState(false);

  return (
    <div className="App">
      <AllContext.Provider
        value={{
          film,
          setFilm,
          filmList,
          setFilmList,
          filmDetails,
          setFilmDetails,
        }}
      >
        <hr></hr>
        <Header />
        <hr></hr>
        {filmDetails ? <Film /> : <FilmList />}
        <Footer />
      </AllContext.Provider>
    </div>
  );
}

export default App;
