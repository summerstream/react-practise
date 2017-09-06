import React,{Component} from 'react'
import SearchBar from '../components/geeksearch/search-bar'
import SearchResults from '../components/geeksearch/search-results'

class SearchGeek extends Component{
    render(){
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}

export default SearchGeek