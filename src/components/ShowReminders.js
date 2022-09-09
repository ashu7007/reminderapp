import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReminderComponent from "./ReminderComponent";

// function App() {
//   return (
//     <div> <h1>Hello</h1> </div>
//   ); }

class ShowReminders extends React.Component {
  
  show = () =>{
    // this.state.reminderData.map((ele,index) => {
    // console.log(ele);
    console.log(this.props.rem);
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
