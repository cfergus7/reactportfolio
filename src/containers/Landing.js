import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <header className="Landing">
        <div className="container">
          <div className="Landing__content">
            <h1 className="Landing__title">
              <div className='Landing_space'></div>
              <span className="gradient-accent">Web Developer</span> <br />
              <span className="gradient-accent">Location</span> Nashville, TN
            </h1>
            <p className="Landing_text">
              Developing effective and responsive websites for clients everywhere.
            </p>
            <div className='Link_Space'></div>
            <div className="Landing_Link">
              <Link className="landinglinks" to="/portfolio">
                View Projects
              </Link>
              
              <Link className="landinglinks" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
