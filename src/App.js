import './App.css'
import {isAuthenticated} from "./utils";
import React from "react";
import { withCookies } from 'react-cookie';
import Login from "./components/LoginPage/Login";

class App extends React.Component {
    render() {
        const { cookies } = this.props;

        if (isAuthenticated(cookies)) {
            return "Placeholder"
        } else {
            return <Login />
        }
    }
}

export default withCookies(App);