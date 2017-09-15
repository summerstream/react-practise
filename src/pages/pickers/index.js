import React,{Component} from 'react'
import Page from '../../components/page/index'
import PickerCore from '../../components/picker-core/index'
import Picker from '../../components/picker/index'
import DatePicker from '../../components/date-picker/index'
import Button from '../../components/button/index'
import DatePickerCore from '../../components/date-picker/core'
import DatePickerCustom from '../../components/date-picker/custom'

class Pickers extends Page{
    constructor(props){
        super(props);
        this.onConfirmDate = this.onConfirmDate.bind(this);
    }
    state={
        // pickerHidden:true,
        // datePickerHidden:true,
        // customDatePickerHidden:true,
        // showPickerCore:false,
        toggles:[false,false,false,false,false],
        date:''
    }
    onConfirmDate(d){
        this.setState({date:d,datePickerHidden:true});
    }
    togglePicker(type){

        this.setState((prevState,prevProps)=>{
            var toggles = prevState.toggles;
            toggles[type]=!toggles[type];
            return {
                toggles:toggles
            }
        });
    }
    render(){
        return (
        <div style={{padding:'10px'}}>
            <Button  style={{marginTop:'1rem'}} onClick={()=>{this.togglePicker(0)}} >picker core</Button>
            <Button  style={{marginTop:'1rem'}} onClick={()=>{this.togglePicker(1)}}>simple picker</Button>
            <Button  style={{marginTop:'1rem'}} onClick={()=>{this.togglePicker(2)}}> date picker core</Button>
            <Button  style={{marginTop:'1rem'}} onClick={()=>{this.togglePicker(3)}}>date picker</Button>
            <Button  style={{marginTop:'1rem'}} onClick={()=>{this.togglePicker(4)}}>custom date picker</Button>
            <div>{this.state.date.toString()}</div>
            <div style={{position:'fixed',bottom:0,left:0,width:'100%'}}>
                { this.state.toggles[0] && <PickerCore dataSource={[...Array(10).keys()]} />}
                <Picker hidden={!this.state.toggles[1] } dataSource={[1,2,3,4]} current={0} onConfirm={()=>{}} onCancel={()=>{this.togglePicker(1)}} onChanged={()=>{}} />
                { this.state.toggles[2] && <DatePickerCore hidden={false} current={new Date('2017/09/03 12:30:00')} onChange={(d)=>{console.log(d);}} />}
                { this.state.toggles[3] && <DatePicker hidden={false}  current={new Date('2017/09/03 12:30:00')} onChange={(d)=>{console.log(d)}} />}
                { <DatePickerCustom hidden={!this.state.toggles[4]} from={new Date('2017/08/31 10:30:00')} to={new Date('2017/09/03 12:00:00')} type={1} onChange={(d)=>{console.log(d)}} onCancel={()=>{this.togglePicker(4)}} />}
            </div>
        </div>

        );
            // <DatePicker hidden={this.state.datePickerHidden} begin={new Date()} end="" current={0} precision="30minutes" onConfirm={this.onConfirmDate} onCancel={()=>{}} onChanged={()=>{}} />
    }
}

export default Pickers