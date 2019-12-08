import React from "react";
import { Button } from "antd";
import "../static/index.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>按钮展示：</h1>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}
