import { useState, useEffect } from "react";


function TrafficLightSimulator() {

  const [myColor, setColor] = useState("red")

  useEffect(() => {

  })
  return (

    <div>
      <h3>Traffic Light Simulator</h3>
      <div style={{width: "80px", height: "240px", backgroundColor: "black", borderRadius: "5%", padding: "40px"}}>
        <div className="red" style={{ width: "70px", height: "70px", backgroundColor: myColor === "red" ? "red" : "", borderRadius: "50%" }}></div>
        <br />
        <div className="yellow" style={{ width: "70px", height: "70px", backgroundColor: myColor === "yellow" ? "yellow" : "", borderRadius: "50%" }}></div>
        <br />
        <div className="green" style={{ width: "70px", height: "70px", backgroundColor: myColor === "green" ? "green" : "", borderRadius: "50%" }}></div>
      </div>
    </div>
  );
}

export default TrafficLightSimulator;