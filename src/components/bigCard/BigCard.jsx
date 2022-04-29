import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigCard">
      <div className="container">
        <div>
          <img src={props.poster} alt={props.altImage} />
        </div>
        <div className="filmInfo">
          <div className="title">{props.title}</div>
          <div className="plot">
            <p>Scenario: <br />{props.plot}</p>
          </div>
          <div className="actors">
            <p>Actors: <br /><span className="actors-span">{props.actors}</span></p>
          </div>
          <div className="director">
            <p>Directed by: <br />{props.director} </p>
          </div>
          <div className="year-rating">
            <span>Released: {props.year}</span>
            <span>IMDB Rating: {props.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
