import * as React from "react";

export class Footer extends React.Component {
    public render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>MiCarta</strong> by <a href="https://oli.codes">Oli Balmford</a>.
                    </p>
                </div>
            </footer>
        );
    }
}
