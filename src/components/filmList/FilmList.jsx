import "./FilmList.css";
import Card from "../card/Card";
import { data } from "../../data/data";
import { useContext } from "react";
import { AllContext } from "../../context/AllContext";

function FilmList() {
  const { filmList, setFilmList, setFilm, setFilmDetails } =
    useContext(AllContext);

  const getFilms = () => {
    setFilmList(data);
  };

  window.addEventListener("load", () => {
    getFilms();
  });

  return (
    <div className="filmList">
      <div className="thumbnail">
        {filmList.map((v, i) => (
          <Card
            key={i}
            showBigCard={() => {
              setFilm(data.filter((value) => value.Title.includes(v.Title)));
              setFilmDetails(true);
            }}
            poster={v.Images[0]}
            altImage={v.Title}
            title={v.Title}
            year={v.Released}
            rating={v.imdbRating}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmList;
