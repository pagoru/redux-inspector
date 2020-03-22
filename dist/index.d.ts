export declare const middlewareHandler: (willDispatch: (action: {
    type: string;
    data: any;
}, getState: any) => Object, didDispatch: (action: {
    type: string;
    data: any;
}, getState: any) => void) => void;
export declare const middleware: ({ getState }: {
    getState: any;
}) => (next: any) => (action: any) => any;
