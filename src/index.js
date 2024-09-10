import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const title = " Good Energy: The Surprising Connection Between Metabolism and Limitless Health";
const author = "Casey Means MD";
const img = "/images/book-2.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
console.log(props);
  return (
    <>
      <article className="book">
        <img src={props.img} />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
