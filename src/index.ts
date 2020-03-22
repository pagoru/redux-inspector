
const handlerDispatch = [];

export const middlewareHandler = (
    willDispatch: (action: { type: string, data: any }, getState) => Object,
    didDispatch: (action: { type: string, data: any }, getState) => void
) => {
    // @ts-ignore
    handlerDispatch.push({ willDispatch, didDispatch });
};

export const middleware = ({ getState }) => {
    return next => action => {
        // @ts-ignore
        handlerDispatch.forEach(handler => action = handler.willDispatch(action, getState));
        const returnValue = next(action);
        // @ts-ignore
        handlerDispatch.forEach(handler => handler.didDispatch(action, getState));
        return returnValue;
    }
};
