'use strict';

// basic
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

export function enhance(component) {
    //basic method
    component.prototype._update=()=>{
        console.log(this.state);
    }
    return component;
}