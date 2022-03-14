import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="Listen"
      >
        <span> Listen</span>
      </a>{" "}
      <br />
      <div className="text"> {props.phonetic.text}</div>
    </div>
  );
}
