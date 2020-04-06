
const handlerDispatch = [];

export const middlewareHandler = <A, S>(
    willDispatch: (action: A, getState: () => S) => A,
    didDispatch: (action: A, getState: () => S) => void
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
