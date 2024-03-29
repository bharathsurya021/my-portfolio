import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Nav from "./Nav";
import gif from "./svg_2.gif";
import RightArrows from "./images/right-arrow.svg";
import LeftArrows from "./images/left-arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div>
        <div className="intro--div">
          <h1 className="intro--title">Readme.md</h1>
          <div className="intro--section">
            <div className="intro--gif animate__animated animate__slideInLeft">
              <img src={gif} />
            </div>
            <div className="intro--content animate__animated animate__fadeInDown">
              <p className="intro--para">
                I am a frontend developer who loves to play with JavaScript and
                React. I love playing with CSS, but, hate it when it starts
                jiggling my head. I enjoy writing technical blogs and also
                educate people on Twitter through my threads. I possess
                excellent skills in CSS and JavaScript.
              </p>
              <p className="intro--para">
                These days, I'm involved in building projects to sharpen up my
                frontend skills.
              </p>
              <p className="intro--para">
                I love contributing to open source projects.
              </p>
              <h3 className="intro--tech">Technologies I have worked with:</h3>
              <ul className="intro--techStack">
                <li className="intro--li">HTML</li>
                <li className="intro--li">CSS3</li>
                <li className="intro--li">JavaScript</li>
                <li className="intro--li">Tailwind CSS</li>
                <li className="intro--li">ReactJS</li>
                <li className="intro--li">Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about--arrows">
          <img
            className="left--arrows"
            onClick={() => {
              navigate("/");
            }}
            src={LeftArrows}
          ></img>
          <img
            className="right--arrows"
            onClick={() => {
              navigate("/Project");
            }}
            src={RightArrows}
          ></img>
        </div>
      </div>
    </>
  );
}
