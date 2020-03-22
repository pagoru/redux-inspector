"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlerDispatch = [];
exports.middlewareHandler = function (willDispatch, didDispatch) {
    handlerDispatch.push({ willDispatch: willDispatch, didDispatch: didDispatch });
};
exports.middleware = function (_a) {
    var getState = _a.getState;
    return function (next) { return function (action) {
        handlerDispatch.forEach(function (handler) { return action = handler.willDispatch(action, getState); });
        var returnValue = next(action);
        handlerDispatch.forEach(function (handler) { return handler.didDispatch(action, getState); });
        return returnValue;
    }; };
};
