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
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 3,
    marginBottom: 50,
    textAlign:"center",
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
    date: "2016 – 2018",
    title: "Lorem",
    subtitle: "Ipsum",
    content: `Est incididunt sint eu minim dolore mollit velit velit commodo ex
        nulla exercitation. Veniam velit adipisicing anim excepteur
        nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
        officia irure reprehenderit laborum fugiat dolore in elit.
        Adipisicing do qui duis Lorem est.`,
  },
  {
    date: "2016 – 2018",
    title: "Lorem",
    subtitle: "Ipsum",
    content: `Est incididunt sint eu minim dolore mollit velit velit commodo ex
        nulla exercitation. Veniam velit adipisicing anim excepteur
        nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
        officia irure reprehenderit laborum fugiat dolore in elit.
        Adipisicing do qui duis Lorem est.`,
  },
  {
    date: "2016 – 2018",
    title: "Lorem",
    subtitle: "Ipsum",
    content: `Est incididunt sint eu minim dolore mollit velit velit commodo ex
        nulla exercitation. Veniam velit adipisicing anim excepteur
        nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
        officia irure reprehenderit laborum fugiat dolore in elit.
        Adipisicing do qui duis Lorem est.`,
  },
];

const Roadmap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
