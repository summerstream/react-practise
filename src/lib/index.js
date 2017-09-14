import React,{Component} from 'react'
import Home from '../pages/home/index'
import Search from '../pages/search/index'
import {FORWARD,BACK} from '../lib/symbol'

const pages = {
    home:{
        path:'home',
        action:Home
    },
    search:{
        path:'search',
        action:Search
    }
}

class Router extends Component{
    constructor(props){
        super(props);        
        const module = pages.home.action;
        let page = this.getPage() || 'home';
        this.state ={
            page:page
        }
        window.onpopstate = function(e){
            e.preventDefault();
            
            var page = this.getPage();
            this.setState({page});
        }.bind(this);
        window[FORWARD] = function(path,data){
            var page = this.getPage(path);
            this.setState({
                page:page
            })
        }.bind(this);
        window[BACK] = (path,data)=>{
            var page = this.getPage(path);
            this.setState({
                page:page
            })
        }
    }
    render(){
        let Page = pages[this.state.page].action;
        return (
            <div>
                <Page data={{a:1}} />
            </div>
        )
    }
    getPage(path){
        if(!path){
            path = window.location.pathname;
        }
        let page;
        for(let p in pages){
            let regex = new RegExp('^/?'+pages[p].path,'i');
            if(regex.test(path)){
                page = p;
                break;
            }
        }
        return page;
    }
}

export default Router