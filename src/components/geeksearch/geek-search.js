import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import SearchBarContainer from '../../containers/search-bar-container'
import SearchResultsContainer from '../../containers/search-results-container'
import reducers from '../../reducers/geek-search'

const store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware
    )
)

const GeekSearch = ()=>(
    <Provider store={store}>
        <div>
            <SearchBarContainer />
            <SearchResultsContainer />
        </div>
    </Provider>
)

export default GeekSearch