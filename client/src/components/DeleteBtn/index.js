import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <input type="button" className="btn btn-dark" value="Delete Book" onClick={props.delBook}
      data-id={props.dbid}
      data-title={props.title}
      data-authors={props.authors}
      data-description={props.description}
      data-link={props.link} />
  );
}

export default DeleteBtn;
