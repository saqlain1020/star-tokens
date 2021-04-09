import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import ImgSrc from "../../Assets/Images/logobig.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: "10%",
  },
  heading: {
    letterSpacing: 1,
    color: "rgba(230,230,230) ",
    marginTop: 20,
    textAlign: "center",
    fontSize: 40,
  },
  para:{
      color: "rgba(230,230,230) ",
      maxWidth:600,
  },
  btn:{
      fontSize: 16,
      marginTop:20,      
  }
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={ImgSrc} width="200px" alt="" />
      <Typography variant="h1" className={classes.heading}>
        SAFE STAR TOKENS
      </Typography>
      <Typography align="center" className={classes.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis
        officiis quos maiores voluptates. Corporis fugit inventore id debitis
        libero obcaecati provident harum, eum ipsa nam ratione. Ut, repudiandae
        commodi.
      </Typography>
      <Button variant="outlined" color="primary" className={classes.btn}>
          Buy Tokens
      </Button>
    </div>
  );
};

export default MainContent;
