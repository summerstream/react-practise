import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import SearchBarContainer from '../../containers/search-bar-container'
import SearchResultsContainer from '../../containers/search-results-container'
import reducers from '../../reducers/geek-search'

const store = createStore(reducers)

const GeekSearch = ()=>(
    <Provider store={store}>
        <div>
            <SearchBarContainer />
            <SearchResultsContainer />
        </div>
    </Provider>
)

export default GeekSearch