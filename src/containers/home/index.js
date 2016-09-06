'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Module} from "@container/index";
import './index.less';

import * as Action from '@action/home';


class Home extends Module {
    constructor(props, context) {
        super(props, context);
    }


    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(Action.queryInittialData())
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('recive new props',nextProps);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>Hello world, {this.props.data}</h1>
                <small>power by simplefatty</small>
            </div>
        );
    }
}

export default connect((state)=> {
    return {
        data: state.home.data
    };
})(withRouter(Home));
