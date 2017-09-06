import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition';
import Styles from './mask.js';

class Mask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
    }
    onClick(e) {
        this.props.onClick && this.props.onClick();
    }
    componentDidMount() {

    }
    render() {
        return (
            <TransitionGroup>
                {!this.props.hidden && <Transition in={this.props.in} appear={true} exit={true} unmountOnExit={true} timeout={this.props.timeout || { enter: 2, exit: 300 }} onEntering={(ele, isAppearing) => { console.info(`isAppearing:${isAppearing}`)}} >
                {
                    (state) => (
                        <div style={{ ...defaultStyle}}> {!this.props.hidden && <div style={{...Styles.Mask, ...transitionStyles[state]}} onClick={(e) => { this.onClick(e); }}></div>}</div>
                    )
                }
                </Transition>}
            </TransitionGroup>
        );
    }
}

const defaultStyle = {
    transition: 'all 300ms ease-out',
    opacity: '1'
}
const transitionStyles = {
    entering: { opacity: '0' },
    entered: { opacity: '1' },
    exiting: { opacity: '1' },
    exited: { opacity: '0' }
}

export default Mask;
