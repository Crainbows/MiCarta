import * as React from "react";
import { Hello } from "./Hello";

export class Content extends React.Component {
    public render() {
       return (<div className="container">
       <div className="notification">
         This container is <strong>centered</strong> on desktop.
         <Hello compiler="TypeScript" framework="React"/>
       </div>
     </div>);
    }
}
