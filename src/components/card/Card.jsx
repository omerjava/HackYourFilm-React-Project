import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" onClick={props.showBigCard}>
      <div className="container">
        <div>
          <img src={props.poster} alt={props.altImage} />
        </div>
        <div className="filmInfo">
          <div className="title">{props.title}</div>
          <div className="year-rating">
            <span>Released: {props.year}</span>
            <span>IMDB Rating: {props.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
