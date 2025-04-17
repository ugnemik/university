import React from "react";
import Card from "./Card";

const CardContainer = ({ title, cardsData }) => {
  return (
    <div className="card-container container">
      {title && <h2 className="card-container__title">{title}</h2>}
      <div className="card-container__content">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} link={card.link} linkTitle={card.linkTitle} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
