import React from "react";
import "./cardCases.css";

const CardCases = ({ cardsBgStyle, cardText, smallTextValue, cardDataStyle, globalTextDataValue }) => {
  return (
    <>
      <div className={`cardCasesContainer ${cardsBgStyle}`}>
        <div className="cardCasesTitle">
          <h5 className="cardTextTracker0">{cardText}</h5>
        </div>
        <div className="flex updatedCasesContainer">
          <p className="todayCasesText">{smallTextValue}</p>
        </div>
        <div className="cardCasesData">
          <p className={` ${cardDataStyle}`}>
            {globalTextDataValue}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCases;
