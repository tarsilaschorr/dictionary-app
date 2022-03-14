import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <span>
      This dictionary was coded by{" "}
      <a
        href="https://fervent-brattain-d184df.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Tarsila Schorr
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/tarsilaschorr/dictionary-app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://sharp-kepler-c1825d.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Netlify
      </a>
    </span>
  );
}
