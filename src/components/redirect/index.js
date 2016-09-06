"use strict";

import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Redirect extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        this.props.router.replace("/home");
    }
    render() {
        return null;
    }
}

export default connect()(withRouter(Redirect));
