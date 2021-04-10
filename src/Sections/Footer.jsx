import React from "react";
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,0.4) ",
    padding: "50px 0px",
  },
  heading: {
    color: "#14a5d3 !important",
    marginBottom: 5,
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    color: "#14a5d3",
    transition: "all 200ms",
    "&:hover": {
      color: "white",
    },
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
    },
  },
  footerBottomLinks: {
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      color: "#9AAFC7 !important",
      marginRight: 10,
      marginLeft: 10,
      [theme.breakpoints.down("xs")]: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.heading}>
              Safe Space Protocol
            </Typography>
            <Typography>
              The Safe Space Protocol is a community driven, fair launched DeFi
              Token. Three simple functions occur during each trade: Reflection,
              LP Acquisition, & Burn.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.iconsContainer}>
              <a href="#">
                <FacebookIcon fontSize="large" className={classes.icon} />
              </a>
              <a href="https://twitter.com/SafeSpa99528468">
                <TwitterIcon fontSize="large" className={classes.icon} />
              </a>
              <a href="https://www.instagram.com/_safespaceproject/">
                <InstagramIcon fontSize="large" className={classes.icon} />
              </a>
              <a href="#">
                <RedditIcon fontSize="large" className={classes.icon} />
              </a>
              <a href="https://t.me/safespaceproject">
                <TelegramIcon fontSize="large" className={classes.icon} />
              </a>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ margin: "30px 0px" }} />
        <div className={classes.footerBottom}>
          <div>© 2021 Safe Space Protocol | All Rights Reserved.</div>
          <div className={classes.footerBottomLinks}>
            <a href="#">Branding</a>
            <a href="#">Whitepaper</a>
            <a href="#">How to Buy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
