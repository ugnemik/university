import React from "react";

const Card = ({ title, content, link, linkTitle }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{content}</p>
      <a className="card__link" href={link}>
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
