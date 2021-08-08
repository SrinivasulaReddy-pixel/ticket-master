// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { MDBDataTableV5 } from 'mdbreact';
// import { startRemoveTicket, startSetTickets } from '../../actions/ticketsAction';

// function TicketsList(props) {
//   if (props.tickets.length === 0) {
//     console.log('tick len', props.tickets.length);
//     props.dispatch(startSetTickets());
//   }
  
//   const handleRemove = (id) => {
//     const confirmRemove = window.confirm('Are you sure');
//     if (confirmRemove) {
//       const redirect = () => {
//         props.history.push('/tickets');
//       };
//       props.dispatch(startRemoveTicket(id, redirect));
//     }
//   };
//   const findDepartment = (id) => {
//     //console.log('find department',props.departments.find(dept => dept._id === id))
//     return props.departments.find((dept) => dept._id === id);
//   };
//   const findCustomer = (id)=>{
//     //console.log('find customer',props.customers.find(cust => cust._id === id))
//     return props.customers.find((cust) => cust._id === id);
//   }
//   const findEmployees = (id) => {
//     //console.log('find employee',props.employees.find(emp => emp._id === id))
//     return props.employees.find((emp) => emp._id === id);
//   };
//   const data = {
//     columns: [
//       {
//         label: 'Sl.No',
//         field: 'slno',
//       },
//       {
//         label: 'Code',
//         field: 'code',
//       },
//       {
//         label: 'Customer',
//         field: 'customer',
//       },
//       {
//         label: 'Department',
//         field: 'department',
//       },
//       {
//         label: 'Employees',
//         field: 'employees',
//       },
      
//       {
//         label: 'Priority',
//         field: 'priority'
//       },
//       {
//         label: 'Actions',
//         field: 'actions',
//       },
//     ],
//     rows: props.tickets.map((tic, i) => ({
//       slno: i + 1,
//       code: tic.code,
//       customer: findCustomer(tic.customer)?.name,
//       department: findDepartment(tic.department)?.name,
//       employees: tic.employees.map((emp) => 
//                   findEmployees(emp)?.name
//                 ),
//       priority: tic.priority,
//       actions: (
//         <div>
//           <Link to={`/tickets/${tic._id}`} className="btn btn-secondary btn-sm">
//             show
//           </Link>
//           <button
//             onClick={() => {
//               handleRemove(tic._id);
//             }}
//             className="btn btn-danger btn-sm"
//           >
//             remove
//           </button>
//         </div>
//       ),
//     })),
//   };

//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <h2> Tickets List-{props.tickets.length}</h2>
//         <MDBDataTableV5
//           data={data}
//           hover
//           entriesOptions={[5, 20, 25]}
//           entries={5}
//           pagesAmount={4}
//           searchTop
//           searchBottom={false}
//         />
//         <Link to="/tickets/new"> Add </Link>
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     employees: state.employees,
//     departments: state.departments,
//     tickets: state.tickets,
//     customers: state.customers
//   };
// };
// export default connect(mapStateToProps)(TicketsList);

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // import TicketTab from './Tab'

// // import { Container, Row, Col } from 'reactstrap';

// // import {Chart} from 'react-google-charts';
// // import swal from 'sweetalert2';
// // import { Progress } from 'reactstrap';

// // import { connect } from 'react-redux';
// // import { startToggleTask } from '../../actions/ticketsAction';
// // import { startRemoveTicket } from '../../actions/ticketsAction';
// // import { startGetEmployees } from '../../actions/employeesAction';
// // import { startGetDepartments } from '../../actions/departmentsAction';
// // import { startSetCustomer } from '../../actions/customerAction';

// // class TicketsList extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       searchTerm: '',
// //       currentlyDisplayed: this.props.tickets,
// //     };
// //   }

// //   componentDidMount(){
// //     if( this.props.departments.length===0){
// //         //this.props.dispatch(startSetCustomer());
// //         this.props.dispatch(startGetDepartments())
// //         //this.props.dispatch(startGetEmployees());
// //       }
// //   }
// //   findDepartment = (id) => {
// //     return this.props.departments.find((dept) => dept._id === id);
// //   };

// //   handleRemove = (id) => {
// //     swal({
// //       title: 'Are you sure you want to Delete?',
// //       icon: 'warning',
// //       buttons: true,
// //       dangerMode: true,
// //     }).then((willDelete) => {
// //       if (willDelete) {
// //         swal('Successfully Deleted', {
// //           icon: 'success',
// //         });
// //         this.props.dispatch(startRemoveTicket(id));
// //         this.setState((prevState) => ({
// //           currentlyDisplayed: prevState.currentlyDisplayed.filter(
// //             (ticket) => ticket._id !== id
// //           ),
// //         }));
// //       }
// //     });
// //   };

// //   handleClick = (id) => {
// //     const ticket = this.props.tickets.find((ticket) => ticket._id === id);
// //     const isResolved = ticket.isResolved;

// //     this.props.dispatch(startToggleTask(id, isResolved));
// //   };

// //   handleSearch = (e) => {
// //     let newlyDisplayed = this.props.tickets.filter((ticket) =>
// //       ticket.code.includes(e.target.value)
// //     );
// //     this.setState({
// //       searchTerm: e.target.value,
// //       currentlyDisplayed: newlyDisplayed,
// //     });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //   };

// //   calculate() {
// //     const allTickets = this.props.tickets.length;
// //     const completedTickets = this.props.tickets.filter(
// //       (ticket) => ticket.isResolved
// //     ).length;
// //     const percent = Math.round((completedTickets / allTickets) * 100);
// //     return percent;
// //   }

// //   render() {
// //     const pendingTickets = this.props.tickets.filter(
// //       (ticket) => !ticket.isResolved
// //     );
// //     const high = pendingTickets.filter(
// //       (ticket) => ticket.priority === 'High'
// //     ).length;
// //     const medium = pendingTickets.filter(
// //       (ticket) => ticket.priority === 'Medium'
// //     ).length;
// //     const low = pendingTickets.filter(
// //       (ticket) => ticket.priority === 'Low'
// //     ).length;
// //     const data = [
// //       ['Priority', 'Tickets per Category'],
// //       ['High', high],
// //       ['Medium', medium],
// //       ['Low', low],
// //     ];
// //     const options = {
// //       title: 'Ticket Priority',
// //       pieHole: 0.4,
// //       is3D: false,
// //     };

// //     const data2 = [];
// //     const Header = ['Departments', 'Tickets', { role: 'style' }];
// //     data2.push(Header);
// //     this.props.departments.map((dept) => {
// //       const temp = [];
// //       temp.push(`${dept.name}`);
// //       temp.push(
// //         pendingTickets.filter(
// //           (ticket) =>
// //             (ticket.department.name
// //               ? ticket.department.name
// //               : this.findDepartment(ticket.department).name) === dept.name
// //         ).length
// //       );
// //       temp.push('blue');
// //       data2.push(temp);
// //     });

// //     return (
// //       <div>
// //         <form
// //           className="form-inline float-right mt-3 ml-3"
// //           onSubmit={this.handleSubmit}
// //         >
// //           <input
// //             className="form-control mr-sm-2"
// //             type="search"
// //             placeholder="Search Code"
// //             aria-label="Search"
// //             onChange={this.handleSearch}
// //           />
// //         </form>

// //         <TicketTab
// //           tickets={
// //             this.state.currentlyDisplayed.length === 0
// //               ? this.props.tickets
// //               : this.state.currentlyDisplayed
// //           }
// //           handleClick={this.handleClick}
// //           handleRemove={this.handleRemove}
// //         />

// //         <Link to="/tickets/new" className="mb-4 mt">
// //           Add Ticket
// //         </Link>

// //         <div className="text-center">
// //           Completed Tickets: {this.calculate()}%
// //         </div>
// //         <Progress className="mb-5" striped value={`${this.calculate()}`} />

// //         <h3 className="d-flex justify-content-center mb-3">
// //           Data on Pending Tickets
// //         </h3>
// //         <Container>
// //           <Row>
// //             <Col md="6">
// //               <Chart
// //                 chartType="PieChart"
// //                 width="100%"
// //                 height="400px"
// //                 data={data}
// //                 options={options}
// //               />
// //             </Col>

// //             <Col md="6">
// //               <Chart
// //                 chartType="Bar"
// //                 width="100%"
// //                 height="400px"
// //                 data={data2}
// //                 options={{
// //                   chart: {
// //                     title: 'Tickets By Department',
// //                   },
// //                 }}
// //               />
// //             </Col>
// //           </Row>
// //         </Container>
// //       </div>
// //     );
// //   }
// // }

// // const mapsStateToProps = (state) => {
// //   return {
// //     tickets: state.tickets,
// //     departments: state.departments,
// //     employees: state.employees,
// //     customers: state.customers
// //   };
// // };

// // export default connect(mapsStateToProps)(TicketsList);
