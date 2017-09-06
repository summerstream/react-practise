import React,{Component} from 'react'

export default class Button extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div className={"btn "+(this.props.className || '')} style={{...this.props.style}} onClick={(e)=>{this.props.onClick && this.props.onClick(e);}} >
                { this.props.children}
            </div>
        );
    }
}