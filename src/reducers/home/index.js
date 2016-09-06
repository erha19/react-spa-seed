"use strict";

import {
    QUERY_GLOBAL_DATA,
    ERROR
} from '@action/home';
//对页面prop 数据进行管理
const initialState = {
    data: 'data'
};



export default function index(state = initialState, action) {
    switch (action.type) {
        case QUERY_GLOBAL_DATA:
            return {
                ...state,
                data:action.data
            };
        case ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
}



