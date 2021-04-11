import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { Timeline, Event } from "react-timeline-scribble";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    color: "#14a5d3",
    fontSize: 40,
    fontWeight: 400,
    letterSpacing: 3,
    marginBottom: 50,
    textAlign: "center",
  },
  roadMapTitle: {
    color: "white",
    fontWeight: 600,
    fontSize: 24,
  },
  roadMapPara: {
    color: "rgba(255,255,255,0.8)",
    marginTop: 10,
  },
}));

const data = [
  {
    date: "Q1 2021",
    title: "Protocol Initialized",
    subtitle: "",
    content: `We have successfully onboarded and confirmed a DogeCoin trading 
    pair with Bibipom. We have also successfully begun integration process with 
    WhiteBit [Imminent] and began legal paperwork with Bitmart. Our team size has 
    doubled and our marketing campaign has begun.`,
  },
  {
    date: "Q2 2021",
    title: "The Initial Push",
    subtitle: "",
    content: `The Whitebit tokenomics integration will be completed along with 
    the completion of the SafeMoon App, Wallet, and Game(s). The Bitmart integration
     with tokenomics will also be completed in this quarter. We will begin architecting
      the NFT Exchange as well as video-game integrations. We will be integrating SafeMoon
       with African Markets in addition to setting up a Charity drive and charity vote. We 
       will be exploring other exchanges (i.e. Binance) and begin architecting the SafeMoon 
       Exchange. We will be expanding the team by 35% and establish a UK/Ireland office. We 
       will be architecting a crypto educational app as well as onboarding new partners.`,
  },
  {
    date: "Q3 2021",
    title: "Holding the Line",
    subtitle: "",
    content: `We will finish our crypto educational app and begin our own charity project. 
    We will begin a community listing donation raise for several exchanges (i.e. Coinbase, 
      Binance, Kraken). We will finish our NFT exchange and release our first video game with 
      SafeMoon integrated. We will be expanding the team by 25% and do a community meetup (pending 
        covid restrictions). We will also be integrating with other large exchanges (I.e. Binance, Mandala).`,
  },
  {
    date: "Q4 2021",
    title: "To the Moon!",
    subtitle: "",
    content: `We will finish the SafeMoon Exchange and our charity project. We will finish 
    integrations with our first African market and begin the next integrations with additional 
    African markets. We will create an African based SafeMoon Office and begin hiring in those 
    markets to create jobs. We will be taking donations for our next charity project and begin a 
    vote on the next project as well. We will be establishing a SafeMoon Scholarship in this quarter as well.`,
  },
];

const Roadmap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="roadmap">
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.heading}>
          Roadmap
        </Typography>
        <Timeline style={{ color: "white" }}>
          {data.map((item) => (
            <Event
              key={uuid()}
              interval={item.date}
              title={item.title}
              subtitle={item.subtitle}
            >
              {item.content}
            </Event>
          ))}
        </Timeline>
      </Container>
    </div>
  );
};

export default Roadmap;
