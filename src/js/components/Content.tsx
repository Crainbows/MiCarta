import * as React from "react";

export default class Content extends React.Component {
    public render() {
        return (<div className="container">
            {this.props.children}
        </div>);
    }
}
