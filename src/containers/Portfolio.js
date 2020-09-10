import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
import nextDoorThumbnail from '../Assets/toolNextDoorThumbnail.png';
import firstImpressionThumbnail from '../Assets/firstImpressionThumbnail.png';
import theMixxThumbnail from '../Assets/theMixxThumbnail.png';
import fitnessTrackerThumbnail from '../Assets/fitnessTrackerThumbnail.png';
import budgetCalculatorThumbnail from '../Assets/budgetCalculatorThumbnail.png';
import noteTakerThumbnail from '../Assets/noteTakerThumbnail.png';
import eatDaBurgerThumbnail from '../Assets/eatDaBurgerThumbnail.png';


export default class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <section className="portfolio">
        <div className="portfolio_container">
          <h3 id='projects'>Projects</h3>
        </div>
        <div className="grid">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://shielded-temple-94953.herokuapp.com/" color="inherit" target="_blank">Tool Next Door</Link>
                </Typography>
                <div>
                <Image src={nextDoorThumbnail}></Image>
                </div>
                </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://pacific-basin-52237.herokuapp.com/" color="inherit" target="_blank">First Impression</Link>
                </Typography>
                <div>
                  <Image src={firstImpressionThumbnail} />
                </div>
                </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://cfergus7.github.io/Mixer/" color="inherit" target="_blank">The Mixx</Link>
                </Typography>
                <div>
                  <Image src={theMixxThumbnail}></Image>
                </div>
              </Paper>
            </Grid>


            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://classique-moliere-19367.herokuapp.com/?id=5f108d9b1d74b60017ec75b5" color="inherit" target="_blank">Fitness Tracker</Link>
                </Typography>
                <div>
                  <Image src={fitnessTrackerThumbnail}></Image>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://shielded-fjord-08208.herokuapp.com/" color="inherit" target="_blank">Budget Calculator</Link>
                </Typography>
                <div>
                  <Image src={budgetCalculatorThumbnail}></Image>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://whispering-oasis-17117.herokuapp.com/" color="inherit" target="_blank">Note Taker</Link>
                </Typography>
                <div>
                  <Image src={noteTakerThumbnail}></Image>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Typography>
                  <Link className='portfoliolinks' href="https://arcane-wave-57289.herokuapp.com/" color="inherit" target="_blank">Eat Da Burger</Link>
                </Typography>
                <div>
                  <Image src={eatDaBurgerThumbnail}></Image>
                </div>
              </Paper>
            </Grid>

          </Grid>
        </div>
        <div>
          
        </div>
      </section>
    );
  }
}