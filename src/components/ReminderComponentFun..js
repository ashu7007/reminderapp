import React, {useState} from "react";
import Card from "react-bootstrap/Card"
import Form from 'react-bootstrap/Form'


const ReminderComponent = (props) =>{
// const [isEdit, setIsEdit] = useState(true);
// const [isShow, invokeModal] = useState(false)

const childDataHandler = (data)=>{props.passChild(data)};


// const initModal = () => {
//     return invokeModal(!isShow)
//   }
  
const removeHandler = (e) => {
    console.log(props);
    const listData = props.list.splice(e, 1);
    console.log(listData);
    childDataHandler(props.list);
    
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

const editHandler = (e) => {
    console.log(props);
    const listData = props.list.splice(e, 1);
    console.log(listData);

    
};

const buttonElement = () => {
    return(
        <span className="col">
        <button  className="btn btn-warning mx-4" onClick={() =>props.edit(props)}>Edit</button>
        <button className="btn btn-danger mx-4" onClick={() => removeHandler(props.ind)}>Delete</button>
        </span>
    );
}

return (
    <div className="mx-4" id={props.ind}>
        <Card border={props.color} >
        <Card.Header>
            <span className="row">
                
                <h5 className="col mt-1">Date :{props.data.date} </h5>
                <h5 className="col mt-1">Time :{props.data.time} </h5>
            </span>
           

        </Card.Header>
        <Card.Body  style={{margin:10}}>
        <Card.Text>
            <span className="row">
                <span className="col">
                    <h5 className="col">{props.data.title} </h5>
                </span>
                {props.isShow===true ? buttonElement() : null}
            </span>
            
            
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
    
    </div>

);
}

export default ReminderComponent;