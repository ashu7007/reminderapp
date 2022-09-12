import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'

import ReminderComponent from "./ReminderComponentFun.";
import UpdateForm from "./UpdateReminder";

const ShowReminders = (props) =>{
  const [isShow, invokeModal] = useState(false)
  const [formData, setFormData] = useState(
    { 
      index:null,
      title:"",
      date:"",
      time:"",}
      );

  const closeModal = (event) => {
    return invokeModal(!isShow)
  };
  const initModal = (event) => {
      console.log("clicked");
      console.log(event);
      setFormData(
        { 
          index:event.ind,
          title:event.data.title,
          date:event.data.date,
          time:event.data.time,}
      );
      console.log(formData);
      return invokeModal(!isShow)
    }

  const editHandler = () => {
    return "ok"
  }


  const EditComponent = () => {
    return(
      <div>
      
      <Modal show={isShow}>
          <Modal.Header closeButton onClick={closeModal}>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
          <UpdateForm heading="Update Reminder" toggle={closeModal} setdata={props.passChild} data={formData} reminders={props.data}/>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
  
      </div>
    );
  }
  return(
    <div className={props.color}>
        <h2 className="mx-4">{props.title}</h2>
        <div style={{height:300, overflow: "auto"}} >
        {
            props.data.map((ele,index) => {
            return <ReminderComponent isShow={props.isShow} edit={initModal}  passChild={props.passChild} list={props.data} key={index} ind={index} data={ele} color={props.color}/>
             })
        }
        </div>

    <EditComponent/>    
    </div>

  );
}

export default ShowReminders;
