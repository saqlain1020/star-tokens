import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Element = ({ containerWidth, containerHeight }) => {
  const position = React.useRef({ x: 0, y: containerHeight });
  const ref = React.useRef(null);

  const callback = () => {
    if (position.current.y <= -5)
      position.current = { ...position.current, y: containerHeight + 5 };
    position.current = {
      ...position.current,
      y: position.current.y - 1,
    };
    if (ref.current)
      ref.current.style.transform = `translate(${position.current.x?.toFixed(
        0
      )}px,${position.current.y?.toFixed(0)}px)`;
  };

  React.useEffect(() => {
    let randX = 0 + Math.random() * containerWidth;
    let randY = 0 + Math.random() * containerHeight;
    position.current = { ...position.current, x: randX, y: randY };
    let randSpeed = 16 + Math.random() * 100;
    let interval = setInterval(callback, randSpeed);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let randR = 1 + Math.random() * 2;
  return (
    <div
      ref={ref}
      className={styles.element}
      style={{
        width: randR,
        height: randR,
      }}
    ></div>
  );
};

export default Element;

Element.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
};
