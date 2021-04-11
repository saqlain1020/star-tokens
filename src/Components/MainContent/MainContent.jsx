import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ImgSrc from "../../Assets/Images/logonew.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    minHeight: "calc(100vh - 80px)",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: "10%",
  },
  heading: {
    letterSpacing: 1,
    color: "rgba(230,230,230) ",
    marginTop: 20,
    fontSize: 45,
    marginBottom: 50,
  },
  para: {
    color: "rgba(230,230,230) ",
    maxWidth: 600,
    marginBottom: 20,
  },
  btn: {
    fontSize: 16,
    marginTop: 20,
  },
  flexAlign: {
    display: "flex",
    width: "100%",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  butBtn: {
    marginTop: 40,
    width: "80%",
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Hidden smUp>
            <Grid item xs={12} sm={6} className={classes.flexAlign}>
              <img src={ImgSrc} width="90%" alt="" />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" align="left" className={classes.heading}>
              SAFE SPACE TOKENS
            </Typography>
            <Typography align="left" className={classes.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              corporis officiis quos maiores voluptates. Corporis fugit
              inventore id debitis libero obcaecati provident harum, eum ipsa
              nam ratione. Ut, repudiandae commodi.
            </Typography>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>Total Balance:</Typography>
                  <Typography>123</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Total Balance:</Typography>
                  <Typography>123</Typography>
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn}
              >
                Connect
              </Button>
            </Card>
            <Hidden smUp>
              <center>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.butBtn}
                  style={{ marginBottom: 40 }}
                >
                  Buy Now
                </Button>
              </center>
            </Hidden>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={6} className={classes.flexAlign}>
              <img src={ImgSrc} width="80%" alt="" />
              <Button
                variant="outlined"
                color="secondary"
                className={classes.butBtn}
              >
                Buy Now
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};

export default MainContent;
