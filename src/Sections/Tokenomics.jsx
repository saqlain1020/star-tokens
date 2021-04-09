import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { Timeline, Event } from "react-timeline-scribble";
import TokenCard from "../Components/TokenCard/TokenCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom:20,
  },
  heading: {
    color: "#14a5d3",
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 3,
    marginBottom: 50,
    textAlign:"center",
  },
  
}));

const data = [
    {
        title: "TOKEN TICKER",
        content: "SOGE",
    },
    {
        title: "TOKEN USD",
        content: "235$",
    },
    {
        title: "ABC D",
        content: "USD",
    },
    {
        title: "TOKEN TICKER",
        content: "SOGE",
    },
    {
        title: "TOKEN TICKER",
        content: "SOGE",
    },
    {
        title: "TOKEN TICKER",
        content: "SOGE",
    },
]

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.heading}>
        Tokenomics
        </Typography>
        <Grid container spacing={2}>
            {data.map((item)=><Grid item xs={6} sm={4}>
            <TokenCard key={uuid()} {...item} />
          </Grid>)}
          
         
        </Grid>
      </Container>
    </div>
  );
};

export default Tokenomics;
