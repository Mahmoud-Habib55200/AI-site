import React from "react";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import { Article } from "../../components";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog__heading">
        <h1 className="gradient__Text">
          A lot is happening, We are blogging about it.
        </h1>

        <div className="gpt3__blog__container">
          <div className="gpt3__blog__container__GroupA">
            <Article
              imgURL={blog1}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className="gpt3__blog__container__GroupB">
            <Article
              imgURL={blog2}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgURL={blog3}
              Date="Sep 26, 2021 "
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgURL={blog4}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgURL={blog5}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
