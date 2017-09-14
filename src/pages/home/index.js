import React,{Component} from 'react'
import History from '../../lib/history'
import Page from '../../components/page/index'

class Home extends Page{
    static pageId = '001'
    constructor(props){
        super(props)
    }
    search = ()=>{
        History.forward('search');
    }
    render(){
        return (
            <div>
                <div onClick={this.search}>search</div>
            </div>)
    }
}

export default Home