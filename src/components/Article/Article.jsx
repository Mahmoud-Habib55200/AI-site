import React from "react";
import "./article.css";

const Article = ({ imgURL , Date , title }) => {
  return (
    <div className="gpt3__blog__container__article">
      <div className="gpt3__blog__container__article__image">
        <img src={imgURL} alt="Image" />
      </div>
      <div className="gpt3__blog__container__article__content">
        <p>{Date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  );
};

export default Article;
