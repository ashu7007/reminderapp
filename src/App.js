import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowReminders from "./components/ShowRemindersFun.";
import CreateForm from "./components/CreateReminderFun";

const App = () =>{
  const [reminders, setReminders] = useState([]);
  const [index, setIndex] = useState(null);

  const getUpComingTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    console.log(d1);
    console.log(d2);
    if(d2<d1){
      return tasks
    }

  }

  const getPastTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    console.log(d1);
    console.log(d2);
    if(d2>d1){
      return tasks
    }

  }

  
  return(

    <div className='row container'>
    <div className='row m-3'>
      <h1 className='text-danger'>Remind-Me</h1>
      <hr></hr>
    </div>
    
    <div className='col-5'>
      <CreateForm passChild={setReminders} />
    </div>
    <div className='col-7'>
      <div className='row'>
        <ShowReminders passChild={setIndex} data={reminders.filter(getUpComingTask)} title="Up-coming Reminders" color="m-4 border border-warning"/>
        </div>
      <div className='row'>
        <ShowReminders passChild={setIndex} data={reminders.filter(getPastTask)} title="Past Reminders" color="m-4 border border-danger"/>
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
    console.log(d1);
    console.log(d2);
    if(d2<d1){
      return tasks
    }

  }

  getPastTask = (tasks)=>{
    var d1=new Date(tasks.date);
    var d2 = new Date();
    console.log(d1);
    console.log(d2);
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
