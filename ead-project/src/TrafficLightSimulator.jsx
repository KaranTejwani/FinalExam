

function TrafficLightSimulator() {
  return (

    <div>
      <h3>Traffic Light Simulator</h3>
      <div style={{width: "80px", height: "240px", backgroundColor: "black", borderRadius: "5%", padding: "40px"}}>
        <div style={{ width: "70px", height: "70px", backgroundColor: "Red", borderRadius: "50%" }}></div>
        <br />
        <div style={{ width: "70px", height: "70px", backgroundColor: "yellow", borderRadius: "50%" }}></div>
        <br />
        <div style={{ width: "70px", height: "70px", backgroundColor: "green", borderRadius: "50%" }}></div>
      </div>
    </div>
  );
}

export default TrafficLightSimulator;