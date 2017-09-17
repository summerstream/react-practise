import React,{Component} from 'react'
import PropTypes from 'prop-types'
import History from '../../lib/history'
import Page from '../../components/page/index'

class Home extends Page{
    static pageId = '001'
    constructor(props){
        super(props)
    }
    componentDidMount(){
        super.componentDidMount();
        console.info(`home pageID:${this.context.pageID}`);

    }
    search = ()=>{
        History.forward('search',{msg:'haha'});
    }
    render(){
        return (
            <div>
                <div onClick={this.search}>search</div>
                <div onClick={()=>{History.forward('pickers')}}>pickers</div>
            </div>)
    }
    static contextTypes = {
        pageID:PropTypes.string
    }
}

export default Home