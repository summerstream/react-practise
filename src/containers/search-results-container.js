import {connect} from 'react-redux'
import SearchResults from '../components/geeksearch/search-results'

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

const SearchResultsContainer = connect(
    mapStateToProps,
    ()=>({})
)(SearchResults)

export default SearchResultsContainer