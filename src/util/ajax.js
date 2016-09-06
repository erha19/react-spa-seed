import request from "reqwest";
import Promise from "bluebird";

//error handle
function ApiError(option={}) {
    this.message = option.message || "api error";
    this.name = "ApiError";
    this.reason = option.reason;
    this.url = option.url;
    this.errorCode = option.errorCode;
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ApiError);
    }
}

ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

Promise.config({warnings: false});

export default function fetchData(url, data) {
    return Promise
        .resolve(request({url, data, type: "json"}))
        .then(res => {
            return Promise.resolve(res.data);
        }, (err, msg) => {
            // 针对404, 3xx, 5xx等error
            return Promise.reject(new ApiError({reason: msg, url, errorCode: err.status, httpCode: err.status}));
        });
}


export function submitData(url, data) {
    return Promise
        .resolve()
        .then(_ => {
            return request({url, data, type: "json", method: "post"});
        })
        .then(res => {
            return Promise.resolve(res.data);
        }, (err, msg) => {
            // 针对404, 3xx, 5xx等error
            return Promise.reject(new ApiError({reason: msg, url, errorCode: err.status, httpCode: err.status}));
        });
}
