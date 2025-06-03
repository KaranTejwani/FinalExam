import { useState, useEffect } from "react";


function TrafficLightSimulator() {

  const [myColor, setColor] = useState("red")

  useEffect(() => {
    const colors = ["red", "yellow", "green"];
    let indexNumber = colors.indexOf(myColor);

    const interval = setInterval(() => {
      indexNumber = (indexNumber + 1) % colors.length;
      setColor(colors[indexNumber]);
    }, 3000);

    return () => clearInterval(interval);
  }, [myColor]);
  return (

    <div>
      <h3>Traffic Light Simulator</h3>
      <div style={{width: "70px", height: "240px", backgroundColor: "black", borderRadius: "5%", padding: "40px", boxShadow: "0 0 20px rgba(0,0,0,0.5)"}}>
        <div className="red" style={{ width: "70px", height: "70px", backgroundColor: myColor === "red" ? "red" : "grey", borderRadius: "50%", boxShadow: myColor === "red" ? "0 0 20px red" : "" }}></div>
        <br />
        <div className="yellow" style={{ width: "70px", height: "70px", backgroundColor: myColor === "yellow" ? "yellow" : "grey", borderRadius: "50%", boxShadow: myColor === "yellow" ? "0 0 20px yellow" : "" }}></div>
        <br />
        <div className="green" style={{ width: "70px", height: "70px", backgroundColor: myColor === "green" ? "green" : "grey", borderRadius: "50%", boxShadow: myColor === "green" ? "0 0 20px green" : ""  }}></div>
      </div>
    </div>
  );
}

export default TrafficLightSimulator;