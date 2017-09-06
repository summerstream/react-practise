import React, { Component } from 'react';
import styles from './styles.js';
import Mask from '../mask/index'
import DateUtil from '../../util/date.js';
import PickerCore from  '../picker-core/index.js';

class DatePickerCore extends Component{
    constructor(props){
        super(props);
        var minDate = null;
        if(this.props.begin){
            minDate = this.props.begin;
        }else{
            minDate = new Date();
            minDate.setMilliseconds(0);
            minDate.setSeconds(0);
            minDate.setMinutes(minDate.getMinutes()+30);
            if(minDate.getMinutes() <=30){
                minDate.setMinutes(30);
            }else{
                minDate.setMinutes(0);
                minDate.setHours(minDate.getHours()+1);
            }
        }
        this._minDate = minDate;
        if(this.props.precision){

        }

        var hours = [...Array(24).keys()];
        var cur = this.props.current || new Date();
        if(cur.getMinutes() <=30){
            cur.setMinutes(30);
        }else{
            cur.setMinutes(0);
            cur.setHours(cur.getHours()+1);
        }
        cur.setSeconds(0);
        cur.setMilliseconds(0);
        if(cur< minDate){
            hours = hours.filter((v,k)=>{
                return v >= minDate.getHours();
            });
            cur = minDate;
        }
        this._current = cur;
        
        this._minutes = [0,30];
        var baseDate = new Date(minDate.getTime());
        baseDate.setMinutes(0);
        baseDate.setHours(0);
        this._dates = [new Date(minDate.getTime())];
        for(var i =0;i<60;i++){
            this._dates.push(new Date(baseDate.setDate(baseDate.getDate()+1)));
        }

        this._presentDates = this._dates.map( (v,k)=>{
            return DateUtil.formate(v, 'MM月dd日 ') + DateUtil.getWeekName(v);
        });
        this.state={
            hours:hours,
            initDayIndex:0,
            initHourIndex:hours.indexOf(minDate.getHours()),
            initMinuteIndex:this._minutes.indexOf(minDate.getMinutes())
        }

        this.onDateChange = this.onDateChange.bind(this);
        this.onHourChange = this.onHourChange.bind(this);
        this.onMinuteChange = this.onMinuteChange.bind(this);
    }

    onDateChange(d){
        this.resetHours(new Date(this._dates[d].getTime()));
        var cur = new Date(this._dates[d].getTime());
        cur.setHours(this._current.getHours());
        cur.setMinutes(this._current.getMinutes());
        this._current = cur;
        this.props.onChange && this.props.onChange(this._current);
    }
    resetHours(d){
        var hours = [...Array(24).keys()];
        if(d <= this._minDate){
            hours = hours.filter((v,k)=>{
                return v >= this._minDate.getHours();
            });
            var index = hours.indexOf(this._current.getHours());
            if(index > 0){

            }else{
                this._current.setHours(hours[0]);
            }
        }
        //reset initial hour
        var initHourIndex = hours.indexOf(this._current.getHours());
        if(initHourIndex < 0){
            initHourIndex = 0;
        }
        this.setState({
            hours:hours,
            initHourIndex:initHourIndex
        });
    }
    onHourChange(d){
        this._current.setHours(this.state.hours[d]);
        this.props.onChange && this.props.onChange(this._current);
    }
    onMinuteChange(d){
        this._current.setMinutes(this._minutes[d]);
        this.props.onChange && this.props.onChange(this._current);
    }
    componentWillMount(){
    }
    componentDidMount(){
        this.resetDayIndex(this._current);
        this.resetHours(this._current);
        this.resetMinutes(this._current);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.current !== this._current && nextProps.resetDefault == true){
            this._current = nextProps.current;
            this.resetDayIndex(nextProps.current);
            this.resetHours(nextProps.current);
            this.resetMinutes(nextProps.current);
        }
    }
    render(){
        return (
            <div style={styles.cores}>
                <PickerCore style={{flex:2}} dataSource={this._presentDates} current={this.state.initDayIndex} onChanged={this.onDateChange} />
                <PickerCore style={{flex:1}} dataSource={this.state.hours} current={this.state.initHourIndex} onChanged={this.onHourChange} />
                <PickerCore style={{flex:1}} dataSource={this._minutes} current={this.state.initMinuteIndex} onChanged={this.onMinuteChange} />
            </div>
        );
    }
    resetDayIndex(dateValue){
        var d = new Date(dateValue.getTime());
        var initDayIndex = this._dates.findIndex((v)=>v.getFullYear() == d.getFullYear() && v.getMonth() == d.getMonth() && v.getDate()==d.getDate());
        if(initDayIndex < 0){
            this.setState({
                initDayIndex:0
            });
        }else{
            this.setState({
                initDayIndex:initDayIndex
            });
        }
    }
    resetMinutes(d){
        var index = this._minutes.indexOf(d.getMinutes());
        this.setState({
            initMinuteIndex:index
        });
    }
}

export default DatePickerCore;