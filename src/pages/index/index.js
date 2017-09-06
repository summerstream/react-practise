import React,{Component} from 'react'
import {
    Link
} from 'react-router-dom'

class IndexPage extends Component{
    render(){
        return (
            <div>
                <Link to="/pickers" >pickers</Link>
            </div>
        );
    }
}

export default IndexPage