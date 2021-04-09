import React from "react";
import {
  Card,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
    title: "GREATNESS AWAITS",
    content: `We are a new currency within the DeFi space and are working day and
    night to grow our service. $SAFESTAR has ambitious plans for the
    future but we’re already loaded with innovative technology features.`,
  },
  {
    title: "GREATNESS AWAITS",
    content: `We are a new currency within the DeFi space and are working day and
    night to grow our service. $SAFESTAR has ambitious plans for the
    future but we’re already loaded with innovative technology features.`,
  },
  {
    title: "GREATNESS AWAITS",
    content: `We are a new currency within the DeFi space and are working day and
    night to grow our service. $SAFESTAR has ambitious plans for the
    future but we’re already loaded with innovative technology features.`,
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
