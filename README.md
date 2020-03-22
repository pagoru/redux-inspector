![Build status](https://pagoru.visualstudio.com/redux-middleware/_apis/build/status/redux-middleware-CI)
# @pagoru/redux-middleware
Simple redux middleware library, to create your own middleware.

## Usage
```js
import { createStore } from 'redux'
import { middleware, middlewareHandler } from 'redux-middleware'

// Create as many you need.
middlewareHandler(  
    (action, getState) => {  
	    // you can modify your action here
		console.log('will', action, getState());  
		return action;  
  }, (action, getState) => {  
        console.log('did', action, getState());  
  }  
);

const initialStore = {}
// Add the middleware to the createStore.
const store = createStore(rootReducer, initialStore, applyMiddleware(middleware));

```
