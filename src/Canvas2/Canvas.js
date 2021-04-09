import React from "react";
import styles from "./styles.module.css";
import Element from "./Element";
import { v4 as uuid } from "uuid";
import { withResizeDetector } from "react-resize-detector";

const Canvas = ({ width, height}) => {
  const ref = React.createRef(null);

  return (
    <div ref={ref} className={styles.container} >
      {[...Array(300)].map((item) => (
        <Element key={uuid()} containerHeight={height?height:100} containerWidth={width?width:100} />
      ))}
    </div>
  );
};

export default withResizeDetector(Canvas);
