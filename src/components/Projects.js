import React from "react";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import { Project_img } from "./Project_img";

export const Projects = () => {
  return (
    <>
      <div className="card">
        <div className="card-block">
          <h2>Projects</h2>
          <div className="row">


              <Project_img img ={img2} title="Amelia App" date ="June 2020"/>
              <Project_img img ={img3} title="Portland" date ="jan 2022"/>
              <Project_img img ={img4} title="Denz for Nilon" date ="March 2021"/>
         
          </div>
        </div>
      </div>
    </>
  );
};
