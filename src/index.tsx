import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./js/components/Hello";
import "./styles/main.scss";

const App = () => {
    return (
      <div>
        <p>Hello world!</p>
        <Hello compiler="TypeScript" framework="React"/>
      </div>
    );
  };

ReactDOM.render(<App />, document.getElementById("app"));
