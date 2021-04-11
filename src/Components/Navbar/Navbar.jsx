import React from "react";
import { Container, Hidden, makeStyles, Typography } from "@material-ui/core";
import ImageSrc from "../../Assets/Images/logonew.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
  },
  grid: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "4fr repeat(4,1fr)",
    "& div": {
      marginRight: 5,
      marginLeft: 5,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2,1fr)",
      gridTemplateRows: "1fr 1fr",
    },
  },
  link: {
    height: "100%",
  },
  linkText: {
    color: "white",
    textDecoration: "none !important",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "underline !important",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.grid}>
        <Hidden xsDown>
          <div
            className={`flex ${classes.link}`}
            style={{ justifyContent: "flex-start" }}
          >
            <img src={ImageSrc} height="60px" alt="" />
          </div>
        </Hidden>
        <div className={`flex ${classes.link}`}>
          <a href="#root">
            <Typography
              variant="h3"
              align="center"
              className={classes.linkText}
            >
              Home
            </Typography>
          </a>
        </div>
        <div className={`flex ${classes.link}`}>
          <a href="#roadmap">
            <Typography
              variant="h3"
              align="center"
              className={classes.linkText}
            >
              Roadmap
            </Typography>
          </a>
        </div>
        <div className={`flex ${classes.link}`}>
          <a href="#tokenomics">
            <Typography
              variant="h3"
              align="center"
              className={classes.linkText}
            >
              Tokenomics
            </Typography>
          </a>
        </div>
        <div className={`flex ${classes.link}`}>
          <a href="#features">
            <Typography
              variant="h3"
              align="center"
              className={classes.linkText}
            >
              Features
            </Typography>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
