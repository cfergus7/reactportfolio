import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


export default function NavBar() {
  return (
  <AppBar position="static">
    <Toolbar>
      <ChevronLeftIcon />
      <Typography>
        <Link href="/" color="inherit">
          Chris Ferguson
        </Link>
      </Typography>
      <ChevronRightIcon />
      <Button float="right" color="inherit" href="/about">About</Button>
      <Button color="inherit" href="/contact">Contact</Button>
      <Button color="inherit" href="/portfolio">Portfolio</Button>
    </Toolbar>
  </AppBar>
  );
};
