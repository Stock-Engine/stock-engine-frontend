import React from "react";
import {QueryList} from "./Queries";
import {withCookies} from "react-cookie";
import {API} from "../../Api";

class AlertList extends QueryList {
    renderElement(el) {
        return (
            "Alert " + el.name
        )
    }
}

class Alerts extends React.Component {
    constructor(props) {
        super(props);

        this.state = { alerts: [] }
    }

    componentDidMount() {
        const ths = this;

        const { cookies } = this.props;
        API.getAlerts(cookies)
            .then((alerts) => ths.setState({ alerts: alerts}))
    }

    render() {
        return (
            <AlertList data={this.state.alerts} />
        );
    }
}

export default withCookies(Alerts)