import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import styles from './styles.js';
import transitionCss from '../../css/transition.css'
import Mask from '../mask/index';
import PickerCore from '../picker-core/index.js';
import PropTypes from 'prop-types'
import PullTransition from '../transition/pull'
import FadeTransition from '../transition/fade'

class Picker extends Component{ 
    static PropTypes = {
        hidden:PropTypes.bool,
    }
    constructor(props){
        super(props);
        this.state={
            hidden:this.props.hidden,
            // hidden:true
        }
        this._current = this.props.current;
        this.onCancel=this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    onCancel(e){
        this.setState({
            hidden:true
        });
        this.props.onCancel && this.props.onCancel();
    }
    onConfirm(e){
        this.setState({
            hidden:true
        });
        this.props.onConfirm(this._current);
    }
    componentDidMount(){
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps){
        // console.info('nextProps.hidden:'+nextProps.hidden);
        // console.info('props.hidden:'+this.props.hidden);
        // if(nextProps.hidden !== this.props.hidden){
            this.setState({
                hidden:nextProps.hidden
            });
        // }
    }
    componentWillAppear(){
        console.info('componentWillEnter');
    }
    render(){
        return (
            <div >
                <Mask hidden={this.state.hidden} onClick={this.onCancel} />
                <TransitionGroup style={{...styles.group}}>
                {!this.state.hidden &&<PullTransition >
                     <div ref="container" style={{...styles.container}}>
                        <div style={styles.header}>
                            <div style={{flex:'1',textAlign:'left'}} onClick={this.onCancel} >取消</div>
                            <div style={{flex:'1',textAlign:'right'}} onClick={this.onConfirm} >确定</div>
                        </div>
                        <PickerCore dataSource={this.props.dataSource} current={this.props.current} onChanged={(d)=>{this._current=d;}} />
                    </div>
                </PullTransition>}
                </TransitionGroup>
            </div>
        );
    }
}

export default Picker;