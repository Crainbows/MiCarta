import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "~js/components/Footer";
import Header from "~js/components/Header";

import Contact from "./js/contact";
import Home from "./js/home";
import Notfound from "./js/notfound";
import Users from "./js/users";

import "~styles/main.scss";

const routing = (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>
        <Footer />
    </Router>
);

ReactDOM.render(routing, document.getElementById("app"));
