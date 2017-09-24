import React,{Component} from 'react'
import PropTypes from 'prop-types'
import RouteTable from '../route-table'
import {FORWARD,BACK} from '../lib/symbol'

class Router extends Component{
    constructor(props){
        super(props);        
        let page = this.getPage() || 'home';
        this.state ={
            page:page
        }

        window.onpopstate = (e)=>{
            e.preventDefault();
            var page = this.getPage();
            this.setState({page});
        }

        window[FORWARD] = (path,data)=>{
            var page = this.getPage(path);
            this.setState({
                page:page,
                data
            })
        }
        
        window[BACK] = (path,data)=>{
            var page = this.getPage(path);
            this.setState({
                page:page,
                data
            })
        }
    }
    getChildContext(){
        return {
            pageID:'8888'
        }
    }
    render(){
        let Page = RouteTable[this.state.page].action;
        return (
            <div>
                <Page data={this.state.data} />
            </div>
        )
    }
    getPage(path){
        if(!path){
            path = window.location.pathname;
        }
        let page;
        for(let p in RouteTable){
            let regex = new RegExp('^/?'+RouteTable[p].path,'i');
            if(regex.test(path)){
                page = p;
                break;
            }
        }
        if(!page){
            page = 'home'
        }
        return page;
    }
}

Router.childContextTypes = {
    pageID:PropTypes.string
}
export default Router