import React, {useState, createContext} from "react";
import Form from 'react-bootstrap/Form'


const CreateForm = (props) => {
  // const [reminderData, setReminderData] = useState([]);
  const [formData, setFormData] = useState(
                                          { 
                                            title:"",
                                            date:"",
                                            time:"",}
                                            );
  const [formError, setformError] = useState(
                                              { 
                                                title:"",
                                                date:"",
                                                time:"",}
                                                );                                         
  const handleInputChange = (event) => {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    console.log(name,value);
    setFormData({...formData,[name]: value});
  }

  const childDataHandler = (data)=>{props.passChild(data)};

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(formData.title==null){
      setformError({...formError,title: "time is required"});
      return null;
      }
    else if(formData.date==null){
      setformError({...formError,date: "date is required"});
       return null;
      }
    else if(formData.time==null){
      setformError({...formError,time: "time is required"});
       return null;
    }
    // setReminderData([...reminderData,
    //   {  
    //   title:formData.title,
    //   date:formData.date,
    //   time:formData.time,
    //   }
    // ]
    // );
    childDataHandler([...props.data,
      {  
      title:formData.title,
      date:formData.date,
      time:formData.time,
      }]);
    setFormData({
        title:null,
        date:null,
        time:null,
    });

    setformError({
      title:null,
      date:null,
      time:null,
  })
    
};
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
  return(
            
    <Form className="m-4 p-4 border-warning border" onSubmit={handleSubmit} >
    <h2>{props.heading}</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" name="title" placeholder="Enter Reminder title"
      onChange={handleInputChange} />
      <p>{formError.title}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" min={today} name="date"  onChange={handleInputChange}/>
      <p>{formError.date}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Time</Form.Label>
      <Form.Control type="time"   name="time"  onChange={handleInputChange} />
      <p>{formError.time}</p>
    </Form.Group>      
    <button type="submit" className="d-grid gap-2 btn btn-warning">
      Create
    </button>
  </Form>
);
}

export default CreateForm;
