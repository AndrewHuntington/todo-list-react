import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-content">
          <p>
            View the repo on{" "}
            <a
              href="https://github.com/AndrewHuntington/todo-list-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    );
  }
}
