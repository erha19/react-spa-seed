'use strict';

var tools = {
    isArray: function (object) {
        return object instanceof Array
    },
    isWindow: function (obj) {
        return obj != null && obj == obj.window
    },
    isDocument: function (obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE
    },
    isObject: function (obj) {
        return this._type(obj) == "object"
    },
    isFunction: function (fn) {
        return this._type(fn) == "function"
    },
    isPlainObject: function (obj) {
        return this.isObject(obj) && !this.isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
    },
    isString: function (str) {
        return typeof str === 'string'
    },
    namespace: function (name) {
        return function (v) {
            return name + '-' + v;
        }
    },
    typeconvert: {
        stringToBoolean: function (val) {
            if (!val) {
                return false;
            } else if (val instanceof Boolean) {
                return val;
            } else if (val === '0' || val === 'false' || val === 'False') {
                return false;
            } else if (val === '1' || val === 'true' || val === 'True') {
                return true;
            }
            return false;
        },
        booleanToText: function (val) {
            if (!val) {
                return "false"
            } else if (val == true || parseInt(val) == 1) {
                return "true"
            } else if (val == false || parseInt(val) == 0) {
                return "false";
            }
            return "false"
        },
        objToJSON: function (obj) {
            if (!obj) {
                return {}
            } else {
                let json = {}
                for (let prop in obj) {
                    let key = '"' + prop + '"';
                    if (obj.hasOwnProperty(prop)) {
                        json[key] = obj[prop];
                    }
                }
            }
            return json;
        }
    }
};
export const NameSpace = tools.namespace.bind(tools);
export const TypeConvert = tools.typeconvert;
export default tools;
