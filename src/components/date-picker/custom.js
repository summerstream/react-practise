
import React, { Component } from 'react';
import styles from './styles.js';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import PullTransition from '../transition/pull'
import Mask from '../mask/index'
import DateUtil from '../../util/date.js';
import DatePickerCore from  './core.js';

class DatePickerCustom extends Component{
    constructor(props){
        super(props);
        var type = this.props.type ? 1:0;
        this.state={
            hidden:this.props.hidden,
            type:type,
            from:this.props.from,
            to:this.props.to,
            reset:false
        }
        this.onCancel=this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    }
    onChangeType(type){
        var to = this.state.to;
        if(type == 1 && this.state.type == 0 && (!this.state.to || this.state.from >= this.state.to)){
            var d = new Date(this.state.from.getTime());
            d.setDate(d.getDate()+2);
            to = d;
        }
        if(type != this.state.type){
            this.setState({
                type:type,
                to:to,
                reset:true
            });
        }
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
        this.props.onConfirm && this.props.onConfirm({from:this.state.from,to:this.state.to});
    }
    onDateChange(d,type){
        if(type){
            this.setState({
                to:d,
                reset:false
            });
        }else{
            this.setState({
                from:d,
                reset:false
            });
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            hidden:nextProps.hidden
        });
    }
    titleStyle={
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize:'0.75rem'
    }
    render(){
        return (
            <div>
                <Mask hidden={this.props.hidden} onClick={this.onCancel} />
                <TransitionGroup>
                    {!this.state.hidden && 
                        <PullTransition style={{...styles.container}}>
                            <div style={styles.header}>
                                <div style={{flex:'1',textAlign:'left'}} onClick={this.onCancel} >取消</div>
                                <div style={{flex:'1',textAlign:'right'}} onClick={this.onConfirm} >确定</div>
                            </div>
                            <div style={{...styles.header,color:'black',padding:'0',height:'2.5rem'}}>
                                <div onClick={()=>{this.onChangeType(0);}} style={{...this.titleStyle,color:this.state.type?'black':'white',background:this.state.type?'#ececec':'#0076FF'}}>
                                    <div>from</div>
                                    <div>{DateUtil.formate(this.state.from)}</div>
                                </div>
                                <div onClick={()=>{this.onChangeType(1);}} style={{...this.titleStyle,color:!this.state.type?'black':'white',background:!this.state.type?'#ececec':'#0076FF'}}>
                                    <div>to</div>
                                    <div>{DateUtil.formate(this.state.to)}</div>
                                </div>
                            </div>
                            {
                                <DatePickerCore current={this.state.type ?this.state.to:this.state.from} resetDefault={this.state.reset} onChange={(d)=>this.onDateChange(d,this.state.type)} />
                            }
                        </PullTransition>}
                
                </TransitionGroup>
            </div>
        );
    }
}

export default DatePickerCustom;
{/* <div ref="container" style={{...styles.container,
                    transform:this.state.hidden?'translate(0,100%)':'translate(0,0)'
                }}>
                    
                   
                </div> */}