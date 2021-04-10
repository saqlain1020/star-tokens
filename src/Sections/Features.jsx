import React from "react";
import { Card, Container, makeStyles, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";

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
  featureHeading: {
    color: "rgba(230,230,230)",
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 1,
  },
  featureContent: {
    color: "#9AAFC7",
    marginTop: 10,
    maxWidth: 800,
    margin: "auto",
  },
}));

const data = [
  {
    title: "100% Community Driven",
    content: `Community driven & fair launch. Dev burned all team tokens and participated in the fair launch with everyone else.`,
  },
  {
    title: "Automatic LP",
    content: `Every trade contributes toward automatically generating liquidity locked inside PancakeSwap LP.`,
  },
  {
    title: "RFI Static Rewards",
    content: `Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely.`,
  },
];

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="features">
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.heading}>
          Features
        </Typography>
        {data.map((item) => (
          <Card key={uuid()}>
            <Typography
              variant="h3"
              align="center"
              className={classes.featureHeading}
            >
              {item.title}
            </Typography>
            <Typography align="center" className={classes.featureContent}>
              {item.content}]
            </Typography>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Features;
