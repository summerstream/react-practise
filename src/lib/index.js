import React,{Component} from 'react'
import RouteTable from '../route-table'
import {FORWARD,BACK} from '../lib/symbol'

class Router extends Component{
    constructor(props){
        super(props);        
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
                page:page,
                data
            })
        }.bind(this);
        
        window[BACK] = (path,data)=>{
            var page = this.getPage(path);
            this.setState({
                page:page,
                data
            })
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
        return page;
    }
}

export default Router