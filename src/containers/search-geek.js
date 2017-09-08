import React,{Component} from 'react'
import SearchBar from '../components/geeksearch/search-bar'
import SearchResults from '../components/geeksearch/search-results'
import {createStore} from 'redux'
import reducers from '../reducers/geek-search'

const store = createStore(reducers)

class SearchGeek extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        store.subscribe(this.forceUpdate.bind(this))
    }
    render(){
        var list = store.getState();
        console.info(list);
        return (
            <div>
                <SearchBar onSearch={(v)=>{store.dispatch({type:'SEARCH'});            }} />
                <SearchResults list={[...list]} />
            </div>
        )
    }
}

export default SearchGeek