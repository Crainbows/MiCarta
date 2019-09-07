import * as React from "react";
import * as ReactDOM from "react-dom";

import { Content } from "~js/components/Content";
import { Footer } from "~js/components/Footer";
import { Header } from "~js/components/Header";
import "~styles/main.scss";

const App = () => {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  };

ReactDOM.render(<App />, document.getElementById("app"));
