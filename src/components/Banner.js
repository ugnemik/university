import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="banner__img" alt={props.imgAlt} src={props.coverImg} />
      <div className="banner__content">
        <div className="container">
          <div>
            <h1 className="banner__content-title">{props.title}</h1>
            <p className="banner__content-text">{props.text}</p>
          </div>
          <a href={props.btnLink} className="banner__content-btn btn btn--accent btn--large">
            {props.btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
