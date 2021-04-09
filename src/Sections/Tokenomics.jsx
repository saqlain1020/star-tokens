import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import TokenCard from "../Components/TokenCard/TokenCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  heading: {
    color: "#14a5d3",
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 3,
    marginBottom: 50,
    textAlign: "center",
  },
}));

const data = [
  {
    title: "Total Supply",
    content: "1,000,000,000,000",
  },
  {
    title: "Token Name",
    content: "SAFESPACE",
  },
  {
    title: "Ticker",
    content: "SAFESPACE",
  },
  {
    title: "BURN RATE",
    content: "5%",
  },
  {
    title: "REDISTRIBUTION RATE",
    content: "5%",
  },
  {
    title: "Safe Space Protocol",
    content: "-",
  },
];

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="tokenomics">
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.heading}>
          Tokenomics
        </Typography>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid key={uuid()} item xs={6} sm={4}>
              <TokenCard key={uuid()} {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Tokenomics;
