import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from  './components/picker/index.js';
import DatePicker from  './components/date-picker/index.js';
import Mask from './components/mask/index.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowPicker:false,
      pickerValue:0,
      isShowMask:false
    }
    this.data = {
      dataSource : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    }
    this.onChanged = this.onChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.showPicker = this.showPicker.bind(this);
    this.onPickerConfirm = this.onPickerConfirm.bind(this);
    this.hidePicker = this.hidePicker.bind(this);
    this.toggleMask = this.toggleMask.bind(this);
  }
  onChanged(d){
    console.info('picker value:'+d);
  }
  onDateChanged(d){
    console.info(d);
  }
  showPicker(e){
    this.setState({
      isShowPicker:true
    });
  }
  hidePicker(){
    console.info('hidePicker');
    this.setState({
      isShowPicker:false
    })
  }
  onPickerConfirm(d){
    console.info('onPickerConfirm:'+d);
    this.setState({
      pickerValue:d,
      isShowPicker:false
    })
  }
  toggleMask(e){
    console.info(this.state.isShowMask);
    this.setState((prevState,props)=>({
      isShowMask:!prevState.isShowMask
    }))
  }
  render() {
    // console.info('isShowMask:'+this.state.isShowMask);
    return (
      <div className="App">
            <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome </h2>
         </div>
        <p className="App-intro">
          you have choosed:{this.state.pickerValue}
        </p>
        <div onClick={this.showPicker}>button</div>
        
        <Picker hidden={!this.state.isShowPicker} dataSource={this.data.dataSource} current={this.state.pickerValue} onConfirm={this.onPickerConfirm} onCancel={this.hidePicker} onChanged={this.onChanged} />
        
        <div onClick={this.toggleMask}>toggleMask</div>
        { this.state.isShowMask && <Mask onClick={()=>{this.setState({isShowMask:false})}} ></Mask>}
      </div>
    );
        // <DatePicker current={new Date().setDate(20)} onChanged={this.onDateChanged} />
  }
}

export default App;
