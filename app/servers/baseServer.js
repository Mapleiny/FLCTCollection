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
    createResponse(code, message, data) {
        return {
            code: code,
            message: message,
            data: data
        };
    }
}
exports.BaseServer = BaseServer;
