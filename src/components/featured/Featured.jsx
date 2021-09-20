import React from "react";

//images
import movie from "../../assets/images/girl.jpeg";
import matrix from "../../assets/images/matrix.webp";
//scss
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = ({ type }) => {
  return (
    <>
      <main className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img src={movie} alt="movie pic" width="100%" />
        <div className="info">
          <img src={matrix} alt="matrix" />
          <span className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            officiis, pariatur culpa maxime ab id sequi minus architecto rem!
            Nemo sit deserunt qui sapiente assumenda molestiae ratione maxime
            suscipit autem.
          </span>
          <div className="btns">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Featured;
