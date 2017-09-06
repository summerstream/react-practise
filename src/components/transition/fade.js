import React,{Component} from 'react'
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
    transition:'all 300ms ease-out',
    opacity:'0'
}
const transitionStyles ={
    entering:{opacity:'0.1'},
    entered:{opacity:'1'},
    exiting:{opacity:'0.1'},
    exited:{opacity:'0'}
}

class FadeTransition extends Component  {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Transition in={this.props.in} appear={true} exit={true} unmountOnExit={true} timeout={this.props.timeout || {enter:1,exit:300}} onEntering={(ele,isAppearing)=>{}} >
            {
                (state)=>(
                    <div style={{...defaultStyle,...transitionStyles[state]}}> {this.props.children}</div>
                )
            }
            </Transition>
        )

    }
}

export default FadeTransition