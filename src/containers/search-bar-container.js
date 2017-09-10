import {connect} from 'react-redux'
import SearchBar from '../components/geeksearch/search-bar'
import {search} from '../actions/geek-search'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: (keywords) => {
            dispatch(search(keywords))
        }
    }
}


const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)

export default SearchBarContainer