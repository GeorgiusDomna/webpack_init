import React from "react";
import "@/styles.css";
import typescript from "@/images/typescript.svg";
import react from "@/images/react.png";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Import files:</h1>
      <h3>.png in ./images</h3>
        <img src={typescript} alt="" />
      <h3>.svg in ./images</h3>
        <img src={react} alt="" />
      <h3>.svg in /public</h3>
        <img src="./webpack.svg" alt="" />
      <h1>Operating mode from env var:</h1>
        {process.env.NODE_ENV == 'development' && 'We are in dev environment'}
        {process.env.NODE_ENV == 'production' && 'We are in prod environment'}
      <h1>Base URL from .env file:</h1>
      <div className="content">{process.env.BASE_URL}</div>
    </div>
  );
};

export default App;
