import React from "react";
import styles from "./styles.module.css";
import Element from "./Element";
import { v4 as uuid } from "uuid";
import { withResizeDetector } from "react-resize-detector";

const Canvas = ({ width, height }) => {
  const ref = React.createRef(null);

  return (
    <div ref={ref} className={styles.container}>
      {console.log(width, height)}
      {[...Array(100)].map((item) => (
        <Element key={uuid()} containerHeight={height} containerWidth={width} />
      ))}
    </div>
  );
};

export default withResizeDetector(Canvas);
