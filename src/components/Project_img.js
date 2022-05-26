import React from "react";

export const Project_img = (props) => {
  return (
    <>
      <div className="col-md-4">
        <img src={props.img} className="img-responsive" alt="" />
        <h3 className="h5">{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </>
  );
};
