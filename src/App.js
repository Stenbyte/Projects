import React from "react";
import Text from "./components/textEditor";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div style={{ boxSizing: "border-box", margin: "*" }}>
      <header style={{ textAlign: "center", backgroundColor: "#485696" }}>
        <img src={Logo} alt="" style={{ width: "4.5rem" }} />
        <h1 style={{ textAlign: "center", color: "white" }}>
          React Text Editor
        </h1>
      </header>
      <div
        style={{
          backgroundColor: "blue",
          height: "90vh",
          paddingTop: "2.2rem",
        }}
      >
        <div>
          <Text />
        </div>
      </div>
    </div>
  );
};

export default App;
