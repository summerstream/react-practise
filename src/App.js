import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import Router from './lib/router'
import reducers from './reducers/geek-search'

const loggerMiddleware = createLogger()

const store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

const App = ()=>(
    <Provider store={store}>
        <Router />
    </Provider>
)

export default App