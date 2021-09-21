import React, { useState } from "react";

//SCSS
import "./listItem.scss";
//images
import movie2 from "../../assets/images/movie2.jpg";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
const ListItem = ({ index }) => {
  const [isHovred, setIsHovred] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovred(true)}
      onMouseLeave={() => setIsHovred(false)}
      style={{ left: isHovred && index * 225 - 50 + index * 3 }}
    >
      <img src={movie2} alt="movie pic" />
      {isHovred && (
        <>
          <video src={trailer} loop autoPlay={true} />
          <div
            className="item-info"
            style={{ visibility: isHovred ? "visible" : "hidden" }}
          >
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="item-info-top">
              <span>1hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ipsam eveniet delectus. Voluptatum nobis ratione quisquam.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
