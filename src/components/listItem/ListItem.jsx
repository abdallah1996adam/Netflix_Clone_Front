import React from "react";

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
const ListItem = () => {
  return (
    <div className="list-item">
      <img src={movie2} alt="movie pic" />
      <div className="item-info">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
