import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,0.4)",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0px 2px 8px rgba(0,0,0,0.4)",
  },
  heading: {
    color: "#14a5d3",
  },
  content: {
    color: "white",
    marginTop: 10,
    fontWeight:600,
    letterSpacing:1,
  },
}));

const TokenCard = ({title="TOKEN TICKER",content="123$"}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <Typography className={classes.content}>{content}</Typography>
    </div>
  );
};

export default TokenCard;
