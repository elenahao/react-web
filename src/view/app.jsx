import React from "react";
import Main from '../component/Main.jsx';
import Login from './Login.jsx';
import { withRouter } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "../static/index.css";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter(App);