import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowReminders from "./components/ShowRemindersFun.";
import CreateForm from "./components/CreateReminderFun";

const App = () =>{
  const [reminders, setReminders] = useState([]);
  const [formData, setFormData] = useState(
    { 
      title:"",
      date:"",
      time:"",}
      );


 
  const getUpComingTask = (tasks)=>{
    var d1=new Date(tasks.date);
    
    var d2 = new Date();
    var hours = d2.getHours();
    var minutes = d2.getMinutes();
    console.log(d1);
    console.log(d2);
    console.log(d2.getDate()==d1.getDate());
    var time = tasks.time.split(':')
    var hours2 = parseInt(time[0]);
    var minutes2 = parseInt(time[1]);
    console.log(hours2,minutes2);
    if(d2.getDate()==d1.getDate() && hours<hours2)
        {return tasks}
    else if (d2.getDate()==d1.getDate() && hours===hours2){
      if(minutes<minutes2)
        {console.log(hours2,minutes2);
          return tasks
        }
    }
    else if(d2.getDate()<d1.getDate() ){
      return tasks
    }

  }

  const getPastTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    var hours = d2.getHours();
    var minutes = d2.getMinutes();
    var time = tasks.time.split(':')
    var hours2 = parseInt(time[0]);
    var minutes2 = parseInt(time[1]);
    if(d2.getDate()==d1.getDate() && hours>hours2)
        {return tasks}
    else if (d2.getDate()==d1.getDate() && hours===hours2){
      if(minutes>minutes2)
        {console.log(hours2,minutes2);
          return tasks
        }
    }
    else if(d2.getDate()>d1.getDate() ){
      return tasks
    }

  }

  setInterval(function(){ 
    reminders.filter(getPastTask);
    reminders.filter(getUpComingTask);

    }, 5000);
  
  return(

    <div className='row container'>
    <div className='row m-3'>
      <h1 className='text-danger'>Remind-Me</h1>
      <hr></hr>
    </div>
    
    <div className='col-5 border-3 border-warning '>
      <CreateForm passChild={setReminders} heading="Create Reminder" data={reminders}/>
    </div>
    <div className='col-7'>
      <div className='row'>
        <ShowReminders isShow={true} formData={setFormData} passChild={setReminders} data={reminders.filter(getUpComingTask)} 
        title="Up-coming Reminders" color="m-4 border border-3 border-warning"/>
        </div>
      <div className='row'>
        <ShowReminders isShow={false} passChild={setReminders} data={reminders.filter(getPastTask)} title="Past Reminders" color="m-4 border border-3 border-danger"/>
        </div>
      
      
    </div>
  </div>
  );
}

class App1 extends React.Component {
  state = {
    reminderData: [
        
        
    ]
  };

  handleCallback = (childData) =>{
    this.setState(
      {
        reminderData:[...this.state.reminderData, childData]
      }
    );
    console.log("parent");
    console.log(this.state);
    }
  
  getUpComingTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    if(d2<d1){
      return tasks
    }

  }

  getPastTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    if(d2>d1){
      return tasks
    }

  }

  render() {
    return(

      <div className='row container'>
      <div className='row m-3'>
        <h1 className='text-danger'>Remind-Me</h1>
        <hr></hr>
      </div>
      
      <div className='col-5'>
        <createForm   parentCallback = {this.handleCallback}/>
      </div>
      <div className='col-7'>
        <div className='row'>
          <ShowReminders rem={this.state.reminderData.filter(this.getUpComingTask)} title="Up-coming Reminders" color="m-4 border border-warning"/>
          </div>
        <div className='row'>
          <ShowReminders rem={this.state.reminderData.filter(this.getPastTask)} title="Past Reminders" color="m-4 border border-danger"/>
          </div>
        
        
      </div>
    </div>
    );
  }
}

export default App;
