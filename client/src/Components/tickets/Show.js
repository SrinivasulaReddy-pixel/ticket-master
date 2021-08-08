// import React from 'react';
// import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';

// import { ListGroup, ListGroupItem } from 'reactstrap';

// function TicketShow (props) {
//  const findCustomer = (id) => {
//     return props.customers.find((customer) => customer._id == id);
//   };

//   const findDepartment = (id) => {
//     return props.departments.find((department) => department._id == id);
//   };

//   const findEmployees = (id) => {
//     return props.employees.find((employee) => employee._id == id);
//   };

//     return (
//       <div>
//         {props.ticket && (
//           <div>
//             <h2>Code Number - {props.ticket.code}</h2>
//             <ListGroup>
//               <ListGroupItem>
//                 Customer -{ findCustomer(props.ticket.customer).name}
//               </ListGroupItem>
//               <ListGroupItem>
//                 Employees - { props.ticket.employees.map((emp) =>
//                       findEmployees(emp)?.name
//                     )}
//               </ListGroupItem>
//               <ListGroupItem>
//                 Department -{ findDepartment( props.ticket.department)?.name}
//               </ListGroupItem>
//               <ListGroupItem>
//                 Message - { props.ticket.message}
//               </ListGroupItem>
//               <ListGroupItem>
//                 Priority - { props.ticket.priority}
//               </ListGroupItem>
//             </ListGroup>
//             <Link className="ml-1" to={`/tickets/edit/${props.ticket._id}`} >Edit</Link><br/>
//             <Link to='/tickets'>back</Link>
//           </div>
//         )}
//       </div>
//     );
//   }


// const mapStateToProps = (state, props) => {
//   const id = props.match.params.id;
//   return {
//     ticket: state.tickets.find((ticket) => ticket._id == id),
//     employees: state.employees,
//     customers: state.customers,
//     departments: state.departments,
//   };
// };

// export default connect(mapStateToProps)(TicketShow);
