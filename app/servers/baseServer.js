"use strict";
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 0] = "success";
    StatusCode[StatusCode["unauthorized"] = 100] = "unauthorized";
    StatusCode[StatusCode["accounterror"] = 101] = "accounterror";
    StatusCode[StatusCode["missparams"] = 200] = "missparams";
    StatusCode[StatusCode["universal"] = 500] = "universal";
})(exports.StatusCode || (exports.StatusCode = {}));
var StatusCode = exports.StatusCode;
class BaseServer {
    constructor() {
    }
    commonBDResponse(reject, callBack) {
        let self = this;
        return function (error, data) {
            if (error) {
                reject(self.createErrorResponse(StatusCode.universal, error.message));
            }
            else {
                callBack(data);
            }
        };
    }
    createResponse(data) {
        return {
            code: StatusCode.success,
            message: 'ok',
            data: data
        };
    }
    createArrayResponse(data, page, count) {
        return {
            code: StatusCode.success,
            message: 'ok',
            data: {
                page: page || 0,
                count: count || data.length,
                list: data
            }
        };
    }
    createErrorResponse(code, message) {
        return {
            code: code,
            message: message || 'error'
        };
    }
}
exports.BaseServer = BaseServer;
