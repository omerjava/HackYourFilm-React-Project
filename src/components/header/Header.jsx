import React from "react";
import "./Header.css";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AllContext } from "../../context/AllContext";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  const { setFilmList, setFilmDetails } = useContext(AllContext);

  const getFilms = () => {
    setFilmList(data);
  };

  const getFilmsByCategory = (userInput) => {
    const filteredData = data.filter((v) => v.Genre.includes(userInput));
    setFilmList(filteredData);
  };

  const getFilmsByNames = (userInput) => {
    const filteredData = data.filter((v) =>
      v.Title.toLowerCase().includes(userInput)
    );
    setFilmList(filteredData);
  };

  window.addEventListener("load", () => {
    getFilms();
  });

  useEffect(() => {
    getFilmsByNames(inputValue);
  }, [inputValue]);

  useEffect(() => {
    getFilmsByCategory(inputCategory);
  }, [inputCategory]);

  return (
    <div className="header">
      <span>
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
            setFilmDetails(false);
          }}
          placeholder="Search Films"
        />
      </span>
      <span
        className="best"
        onClick={() => {
          setInputValue("");
          setFilmDetails(false);
        }}
      >
        Hack Your Film
      </span>
      <span>
        <select
          name="films"
          id="films"
          onChange={(e) => {
            setInputCategory(e.target.value);
            setFilmDetails(false);
          }}
        >
          <option value="" disabled defaultValue hidden>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Biography">Biography</option>
          <option value="Crime">Crime</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
        </select>
      </span>
    </div>
  );
}

export default Header;
