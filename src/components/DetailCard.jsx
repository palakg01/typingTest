import React from "react";

const DetailCard = ({ cardname, cardvalue }) => {
  return (
    <div className="card">
      <p className="card-name"> {cardname}</p>
      <p className="card-value">{cardvalue}</p>
    </div>
  );
};
export default DetailCard;
