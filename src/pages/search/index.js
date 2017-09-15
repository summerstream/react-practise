import React,{Component} from 'react'
import History from '../../lib/history'
import Page from '../../components/page/index'
import GeekSearch from '../../components/geeksearch/geek-search'

class Search extends Page{
    static pageId = '002'
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div onClick={()=>{History.back()}}>back</div>
                <div onClick={()=>{History.back('home')}}>backToHome</div>
                <p>{JSON.stringify(this.props.data)}</p>
                <GeekSearch />
            </div>)
    }
}

export default Search