import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";

import "./list.scss";

const List = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    setIsMoved(true);
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNum < 5) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="arrow-slider left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlined
          className="arrow-slider right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
