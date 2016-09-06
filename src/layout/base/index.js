"use strict";

import React from "react";

import "./index.less";

export default class Layout extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <div className="layout">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

