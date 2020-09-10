import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="about">
        <Grid container spacing={1}>
        <Grid item xs={9}>
        <div className="container about__container">
          <div className="about__content">
            <h1 className="about__title">
            My Story
            </h1>
            <p className="about__text">
            I would like to consider myself a modern day renaissance man. I have been around a lot of different
            backgrounds which has made me into the person that I am today. I played basketball and rugby growing up all the way through college.
            After college I did some corporate training for restaurants and hotel groups. Now I play beach volleyball as a hobby, which leads me to
            meeting amazing people on top of fantastic weekend destinations.
            </p>
            <p className="about__text">
              I am currently open to work full time or free lance.
            </p>
            <div className="about__buttons">
              <Link className="aboutlink" to="/contact">
                Let's Talk
              </Link>
            </div>
          </div>
          </div>
          </Grid>
          <Grid item xs={3}>
          <div className="about__skills">
            <h3 className="skills__title">Tools Used</h3>
            <div className="skills__icons">
              <i
                aria-hidden="true"
                className="devicon-react-original-wordmark colored dev-icon"
                title="React"
              >
                <span className="sr-only">React</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-html5-plain-wordmark colored dev-icon"
                title="HTML5"
              >
                <span className="sr-only">HTML5</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-css3-plain-wordmark colored dev-icon"
                title="CSS3"
              >
                <span className="sr-only">CSS3</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-bootstrap-plain-wordmark colored dev-icon"
                title="Bootstrap"
              >
                <span className="sr-only">Bootstrap</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-javascript-plain colored dev-icon"
                title="Javascript ES6"
              >
                <span className="sr-only">Javascript ES6</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-jquery-plain-wordmark colored dev-icon"
                title="Jquery"
              >
                <span className="sr-only">Jquery</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-nodejs-plain-wordmark colored dev-icon"
                title="Node.js"
              >
                <span className="sr-only">Node.js</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-git-plain-wordmark colored dev-icon"
                title="Git"
              >
                <span className="sr-only">Git</span>
              </i>

              <i 
              aria-hidden='true'
              class="devicon-mysql-plain-wordmark colored"
              title='MySql'
              >
                <span className="sr-only">MySQL</span>
              </i>

              <i 
              aria-hidden='true'
              class="devicon-sequelize-plain-wordmark colored"
              title='Sequelize'
              >
                <span className="sr-only">Sequelize</span>
              </i>
              <i 
              aria-hidden='true'
              class="devicon-visualstudio-plain-wordmark colored"
              title='VSC'
              >
                <span className="sr-only">Visual Studio Code</span>
              </i>
              <i 
              aria-hidden='true'
              class="devicon-babel-plain colored"
              title='Babel'
              >
                <span className='sr-only'>Babel</span>
              </i>

              <i aria-hidden='true' title='Handlebars' class="devicon-handlebars-plain-wordmark colored">
              <span className='sr-only'>Handlebars</span>
              </i>

              <i class="devicon-mongodb-plain-wordmark colored" aria-hidden='true' title='MongoDB'>
              <span className='sr-only'>MongoDB</span>
              </i>

              <i aria-hidden='true' title='Heroku' class="devicon-heroku-original-wordmark colored">
              <span className='sr-only'>Heroku</span>
              </i>
            </div>
          </div>
        </Grid>
        </Grid>
      </section>
    );
  }
}
