import React,{Component} from 'react'

class SearchBar extends Component{
    state={}
    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} />
                <div className="icon search" onClick={this.props.onSearch && this.props.onSearch(this.state.value)}></div>
            </div>
        )
    }
} 

export default SearchBar