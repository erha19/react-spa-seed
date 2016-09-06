'use strict';

// constants 与 actions 在一起
import {NameSpace,TypeConvert} from '@util/tools';
import {fetchData,submitData} from '@util/ajax';


let ns = NameSpace('HOME');
export const QUERY_GLOBAL_DATA = ns('QUERY_GLOBAL_DATA');
export const ERROR = ns('ERROR');




export function queryInittialData() {
    return (dispatch) => {
        console.log('queryInittialData dispatch')
        dispatch({
            type: QUERY_GLOBAL_DATA,
            data: 'Friend'
        })
    }
}