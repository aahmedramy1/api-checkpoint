import React from "react";

const UserCard = ({ person }) => {
  return (
    <div
      className="card text-white bg-secondary mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">{person.name}</div>
      <div className="card-body">
        <h5 className="card-title">{person.company.name}</h5>
        <p className="card-text">{person.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
