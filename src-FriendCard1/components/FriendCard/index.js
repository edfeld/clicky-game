import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.type.name}
          src={props.type.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.type.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.type.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.type.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
