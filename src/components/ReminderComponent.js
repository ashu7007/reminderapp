// import React from "react";
// import Card from "react-bootstrap/Card"

// class ReminderComponent extends React.Component{
    
//     render(){
//         return(
//             <div className="mx-4">

//             {this.props.data.map((ele,index) => {
//             // console.log(ele);
//                 return(
//                             <div key={index}>
//                             <Card border="warning" >
//                             <Card.Header>
//                                 <span className="row">
                                    
//                                     <h5 className="col mt-1">Date : {ele.date}</h5>
//                                     <h5 className="col mt-1">Time :{ele.time}</h5>
//                                 </span>

//                             </Card.Header>
//                             <Card.Body  className={this.props.color} style={{margin:10}}>
//                             <Card.Text>
//                                 <span className="row">
//                                     <span className="col">
//                                         <h5 className="col">{ele.title}</h5>
//                                     </span>
//                                     <span className="col">
//                                         <button className="btn btn-warning mx-4">Edit</button>
//                                         <button className="btn btn-danger mx-4">Delete</button>
//                                     </span>
//                                 </span>
                                
                                
//                             </Card.Text>
//                             </Card.Body>
//                         </Card>
//                         <br />
//                         </div>
//                     );

//              }) }
//             {/* <Card border="warning">
//                 <Card.Header>
//                     <div className="row">
                        
//                         <h5 className="col mt-1">{this.props.data[0].date}</h5>
//                         <h5 className="col mt-1">{this.props.data[0].time}</h5>
//                     </div>

//                 </Card.Header>
//                 <Card.Body  className={this.props.color} style={{margin:10}}>
//                 <Card.Text>
//                     <div className="row">
//                         <div className="col">
//                             <h4 className="col">{this.props.data[0].title}</h4>
//                         </div>
//                         <div className="col">
//                             <button className="btn btn-warning mx-4">Edit</button>
//                             <button className="btn btn-danger mx-4">Delete</button>
//                         </div>
//                     </div>
                    
                    
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//             <br /> */}
//             </div>
//         );
//     }
// }

// export default ReminderComponent;