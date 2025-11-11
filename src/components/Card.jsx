import { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={'moreInfo/' + props.id}>
      <div className="Card">
        <Link to={"edit/" + props.id}>
          <p>Edit</p>
        </Link>
        <h2 className="title">{props.charName}</h2>
        <h3 className="author">{"color " + props.color}</h3>
      </div>
      </Link>
  );
};

export default Card;
