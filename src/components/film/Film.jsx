import React from "react";
import "./Film.css";
import BigCard from "../bigCard/BigCard";
import { useContext } from "react";
import { AllContext } from "../../context/AllContext";

function Film() {
  const { film } = useContext(AllContext);

  return (
    <div className="film">
      {film.map((film, i) => (
        <BigCard
          key={i}
          poster={film.Images[0]}
          altImage={film.Title}
          title={film.Title}
          plot={film.Plot}
          actors={film.Actors}
          director={film.Director}
          year={film.Released}
          rating={film.imdbRating}
        />
      ))}
    </div>
  );
}

export default Film;
