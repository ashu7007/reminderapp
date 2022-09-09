import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReminderComponent from "./ReminderComponentFun.";

const ShowReminders = (props) =>{
  
  return(
    <div className={props.color}>
        <h1 className="mx-4">{props.title}</h1>
        <div style={{height:300, overflow: "auto"}} >
        {
            props.data.map((ele,index) => {
            return <ReminderComponent passChild={props.passChild} list={props.data} key={index} ind={index} data={ele} color={props.color}/>
             })
        }
        </div>
        
    </div>
  );
}

class ShowReminders1 extends React.Component {
  
  show = () =>{
    // this.state.reminderData.map((ele,index) => {
    // console.log(ele);
    return <ReminderComponent  data={this.props.rem} ></ReminderComponent>;

        };
        
  render() {
    
    return (
    <div className={this.props.color}>
        <h1 className="mx-4">{this.props.title}</h1>
        <div style={{height:300, overflow: "auto"}} >
        {this.show()}
            
            {/* <ReminderComponent></ReminderComponent>
            <ReminderComponent></ReminderComponent>
            <ReminderComponent></ReminderComponent>
            <ReminderComponent></ReminderComponent>
            <ReminderComponent></ReminderComponent> */}
        </div>
        
    </div>
    );
  }
}

export default ShowReminders;
