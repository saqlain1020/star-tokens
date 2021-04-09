import React from "react";
import styles from "./styles.module.css";

const MainComp = () => {
  const canvasRef = React.createRef(null);
  const c = React.createRef(null);
  const circleArr = React.createRef([]);
  const [dimensions, setDimentions] = React.useState([200, 200]);

React.useEffect(()=>{
    // callback();
    
},[])

  React.useEffect(() => {
    c.current = canvasRef.current.getContext("2d");    
    init();
    animate();
  }, [canvasRef]);
  const callback = () => {
    let containerWidth = canvasRef.current.getBoundingClientRect().width;
    let containerHeight = canvasRef.current.getBoundingClientRect().height;
    setDimentions([containerWidth, containerHeight]);
    console.log(canvasRef?.current?.getBoundingClientRect())
    console.log([containerWidth, containerHeight])
  };
  React.useEffect(() => {
    window.addEventListener("resize", callback);
    init();
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [dimensions]);

  let animate = () => {
    let containerWidth = dimensions[0];
    let containerHeight = dimensions[1];
    // let containerHeight = canvasRef.current.getBoundingClientRect().height
    requestAnimationFrame(animate);
    c.current.clearRect(0, 0, containerWidth, containerHeight);
    circleArr.current.forEach((e) => {
      e.update();
    });
  };

  let init = () => {
    circleArr.current = []; //Clear Circle array
    let containerWidth = dimensions[0];
    let containerHeight = dimensions[1];

    for (let i = 0; i < 400; i++) {
      //Loop to create 400 circles and store in arr
      //Random radius from range(1,2)
      let radius = 1 + Math.random() * 2;
      let color = `rgba(255,255,255,1)`;
      //create circle object with random and predefince values
      let circle = new Circle(
        Math.random() * containerWidth,
        Math.random() * containerHeight + containerHeight / 2,
        radius,
        0.5 + Math.random() * 1,
        color,
        containerHeight,
        containerHeight
      );
      circleArr.current.push(circle); //Send circle obj to array
    }
  };
  function Circle(x, y, radius, ySpeed, color,containerWidth,containerHeight) {
    this.x = x; //x Position
    this.y = y; //y Position
    this.radius = radius;
    this.ySpeed = ySpeed; //Vertical rising speed
    this.color = color;
    // this.innerHeight = containerHeight; //Height of window of canvas
    // this.innerWidth = containerWidth; //Width
    //Draw Circle function
    this.draw = () => {
      c.current.beginPath();
      c.current.arc(
        this.x,
        this.y,
        this.radius,
        (Math.PI / 180) * 0,
        (Math.PI / 180) * 360,
        false
      );
      c.current.fillStyle = this.color;
      c.current.fill();
    };
    //Update Circle
    this.update = () => {
      this.y -= this.ySpeed; //Decrease y position at certain speed
      //If radius is bigger than zero keep shrinking the circle
    //   if (this.radius >= 0) this.radius -= 0.02;
      //If radis is zero or less set radius to orignal and position of circle at bottom of screen
    //   if (this.radius <= 0) {
    //     this.y = containerHeight + radius * 2;
    //     this.radius = radius;
    //   }

    if(this.y <= 0){
        this.y = containerHeight
    }

      //Interactivity with mouse
      //Reset radius and y axis position
      //   if (
      //     this.x <= mouse.x + this.radius &&
      //     this.x >= mouse.x - this.radius &&
      //     this.y <= mouse.y + this.radius &&
      //     this.y >= mouse.y - this.radius
      //   ) {
      //     this.y = containerHeight + radius * 2;
      //     this.radius = radius;
      //   }
      //Call draw circle function
      this.draw();
    };
  }

  return <canvas ref={canvasRef} className={styles.container} />;
};

export default MainComp;
