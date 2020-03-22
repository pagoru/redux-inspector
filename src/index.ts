
const handlerDispatch = [];

export const middlewareHandler = (
    willDispatch: (action: { type: string, data: any }, getState) => Object,
    didDispatch: (action: { type: string, data: any }, getState) => void
) => {
    handlerDispatch.push({ willDispatch, didDispatch });
};

export const middleware = ({ getState }) => {
    return next => action => {
        handlerDispatch.forEach(handler => action = handler.willDispatch(action, getState));
        const returnValue = next(action);
        handlerDispatch.forEach(handler => handler.didDispatch(action, getState));
        return returnValue;
    }
};
