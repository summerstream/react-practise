
import React, { Component } from 'react';
import styles from './styles.js';
import Mask from '../mask/index'
import DateUtil from '../../util/date.js';
import DatePickerCore from  './core.js';

class DatePicker extends Component{
    constructor(props){
        super(props);

        this.state={
            hidden:this.props.hidden,
            current:this.props.current || new Date()
        }
        this.onCancel=this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onChange = this.onChange.bind(this);
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
        this.props.onConfirm && this.props.onConfirm(this.state.current);
    }
    onChange(d){
        this.setState({
            current:d
        });
        this.props.onChange && this.props.onChange(d);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            hidden:nextProps.hidden,
            current:this.props.current || new Date()
        });
    }
    render(){
        return (
            <div>
                <Mask hidden={this.state.hidden} onClick={this.onCancel} />
                <div ref="container" style={{...styles.container,
                    transform:this.state.hidden?'translate(0,100%)':'translate(0,0)'
                }}>
                    <div style={styles.header}>
                        <div style={{flex:'1',textAlign:'left'}} onClick={this.onCancel} >取消</div>
                        <div style={{flex:'1',textAlign:'right'}} onClick={this.onConfirm} >确定</div>
                    </div>
                    {
                        <DatePickerCore current={this.props.current} onChange={(d)=>this.onChange(d)} />
                    }
                    
                </div>
            </div>
        );
    }
}

export default DatePicker;