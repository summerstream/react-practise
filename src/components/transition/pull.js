import React,{Component} from 'react'
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
    transition:'all 300ms ease-out',
    transform:'translate(0,100%)'
}
const transitionStyles ={
    entering:{transform:'translate(0,100%)'},
    entered:{transform:'translate(0,0%)'},
    exiting:{transform:'translate(0,100%)'},
    exited:{transform:'translate(0,100%)'}
}

class PullTransition extends Component  {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Transition in={this.props.in} appear={true} exit={true} unmountOnExit={true} timeout={this.props.timeout || {enter:1,exit:300}} onEntering={(ele,isAppearing)=>{console.info(ele)}} >
            {
                (state)=>(
                    <div style={{...this.props.style,...defaultStyle,...transitionStyles[state]}}> {this.props.children}</div>
                )
            }
            </Transition>
        )

    }
}

export default PullTransition