import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({ listRef }) => {
  const [isMoved, setIsMoved] = useState(false);
  const slideNumber = useRef(0);

  const handleClick = (direction) => {
    if (isMoved === false) {
      setIsMoved(true);
    }
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber.current > 0) {
      slideNumber.current -= 1;
      listRef.current.style.transform = `translateX(${460 + distance}px)`;
    }
    if (direction === "right" && slideNumber.current < 7) {
      slideNumber.current += 1;
      listRef.current.style.transform = `translateX(${-460 + distance}px)`;
    }
  };

  return (
    <>
      <AiOutlineLeft
        className="arrowIcon left"
        onClick={() => handleClick("left")}
        style={{ display: !isMoved && "none" }}
      />
      <AiOutlineRight
        className="arrowIcon right"
        onClick={() => handleClick("right")}
      />
    </>
  );
};

export default CardSlider;
