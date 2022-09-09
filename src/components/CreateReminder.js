// import React, {createContext} from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// // import { useState } from 'react';

// class CreateForm extends React.Component{
//     // const [reminderData, setReminderData]=useState({});
//     constructor(props) {
//         super(props);
//         this.state = {
//             // reminderData: [
                
//             // ],
//             title:null,
//             date:null,
//             time:null,
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         // this.handleonSubmit = this.handleonSubmit.bind(this);
        
//       }

//     handleInputChange(event) {
//         const target = event.target;
//         var value = target.value;
//         const name = target.name;
//         console.log(name,value);
        
    
//         this.setState({[name]: value});
        
//     }
//     getState = (e) => {
//         e.preventdefault();
//         console.log(this.state);
        

//     }
//     handleonClick = (event)=>{
//         // debugger;
//         // event.preventdefault();  
//         this.setState({reminderData:[...this.state.reminderData,
//                 {  
//                 title:this.state.title,
//                 date:this.state.date,
//                 time:this.state.time,
//                 }
//             ],
//             });
        
//         this.setState({
//             title:null,
//             date:null,
//             time:null,
//         })
        
//     };  

//     onTrigger = () => {
//         if(this.state.title==null){
//            alert("please enter title");
//            return null;
//         }
//         else if(this.state.date==null){
//             alert("please enter date");
//             return null;
//         }
//         else if(this.state.time==null){
//             alert("please enter time");
//             return null;
//         }
//         this.props.parentCallback({  
//                 title:this.state.title,
//                 date:this.state.date,
//                 time:this.state.time,
//                 }
//         );
//         this.setState({
//             title:null,
//             date:null,
//             time:null,
//         })
//       };

    
//     render(){
        
//         return(
            
//             <Form className="m-4 p-4 border-warning border" onSubmit={this.handleonClick} >
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" name="title" placeholder="Enter Reminder title"
//               onChange={this.handleInputChange} />
//             </Form.Group>
      
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Date</Form.Label>
//               <Form.Control type="date"  name="date"  onChange={this.handleInputChange}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Time</Form.Label>
//               <Form.Control type="time" name="time"  onChange={this.handleInputChange} />
//             </Form.Group>
//             <input type="text" onChange={this.onTrigger} className="form-lable bg-info" placeholder="press and any to add">
              
//           </input>
//             <button type="submit" className="d-grid gap-2 btn btn-warning">
//               Create
//             </button>
//             <button onClick={this.getState} className="d-grid gap-2 btn btn-warning">
//               hello
//             </button>
//           </Form>
//     );
//     }
// }

// export default CreateForm;
