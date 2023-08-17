import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (robots.length === 0) {
    return (
      <div className="pa4 white">
        We can't find the robot you are looking for
      </div>
    );
  } else {
    const cardComponent = robots.map((user, i) => {
      return <Card key={i} props={robots[i]} />;
    });
    return <div>{cardComponent}</div>;
  }
};

export default CardList;
