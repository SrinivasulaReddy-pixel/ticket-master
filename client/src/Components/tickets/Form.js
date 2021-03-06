// import React from 'react';
// import axios from '../../config/axios';
// import Select from 'react-select'
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class TicketForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: props.ticket ? props.ticket.code : '',
//       customer: props.ticket ? props.ticket.customer : '',
//       department: props.ticket ? props.ticket.department : '',
//       emps: [],
//       employees: props.ticket ? props.ticket.employees : [],
//       employeesnew: [],
//       message: props.ticket ? props.ticket.message : '',
//       priority: props.ticket ? props.ticket.priority : '',
//     };
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });

//     if (e.target.name === 'department') {
//       this.setState({
//         employeesnew: this.state.emps.filter(
//           (emp) => emp.deptId === e.target.value
//         ),
//       });
//       console.log('emps', this.state.emps)
//       console.log('em', this.state.emps.filter(emp => emp.deptId == e.target.value ))
//       console.log('employeesnew', this.state.employeesnew);
//     }
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       code: this.state.code,
//       customer: this.state.customer,
//       department: this.state.department,
//       employees: this.state.employees,
//       message: this.state.message,
//       priority: this.state.priority,
//     };
//     console.log('employees',this.state.employees)
//     this.props.ticket && (formData.id = this.props.ticket._id);
//     console.log("form tick add",formData);
//     this.props.handleTicketSubmit(formData);
    
//   };

//   // componentWillReceiveProps(nextProps){
//   //     if(nextProps.ticket !== undefined){
//   //     const {code,customer,department,employee,message,priority} = nextProps.ticket
//   //     this.setState({code,customer,department,employee,message,priority})
//   //     }
//   // }

//   componentDidMount() {
//     axios
//       .get('/employees', {
//         headers: {
//           'x-auth': localStorage.getItem('authToken'),
//         },
//       })
//       .then((response) => {
//         const employees = response.data;
//         let emps = [];
//         employees.map((employee) => {
//           return emps.push({
//             id: employee._id,
//             value: employee._id,
//             label: employee.name,
//             deptId: employee.department,
//             name: employee.name
//           });
//         });
//         this.setState({ emps });
//       });
//   }
//   handleMultiChange = (option) => {
//     console.log('employees new', this.state.employeesnew)
//     console.log('option', option);
//     this.setState(() => {
//         return {
//           employees: option.map((option) => Object.assign(option.id)),
//         };
//       });

//     // if (option !== null) {
//     //   let employees = this.state.employees
//     //   option.map(option => {
//     //     return employees.push({_id: option.id})
//     //   })
//     //   this.setState({employees})
//       console.log('employees', this.state.employees);
//       console.log('option', option);
//     }

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="code">Code</Label>
//             <Input
//               type="text"
//               id="code"
//               value={this.state.code}
//               onChange={this.handleChange}
//               name="code"
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="customer">Customer</Label>
//             <Input
//               type="select"
//               id="customer"
//               value={this.state.customer}
//               onChange={this.handleChange}
//               name="customer"
//             >
//               <option value="">select</option>
//               {this.props.customers.map((customer) => {
//                 return (
//                   <option key={customer._id} value={customer._id}>
//                     {customer.name}
//                   </option>
//                 );
//               })}
//             </Input>
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="department">Department</Label>
//             <Input
//               type="select"
//               id="department"
//               value={this.state.department}
//               onChange={this.handleChange}
//               name="department"
//             >
//               <option value="">select</option>
//               {this.props.departments.map((department) => {
//                 return (
//                   <option key={department._id} value={department._id}>
//                     {department.name}
//                   </option>
//                 );
//               })}
//             </Input>
//           </FormGroup>

//           <label>Employees</label>
//           <Select
//             id="employees"
//             name="employees"
//             placeholder="Select"
//             options={this.state.employeesnew}
//             onChange={this.handleMultiChange}
//             isMulti
//           />
//           <br />

//           <FormGroup>
//             <Label htmlFor="message">Message</Label>
//             <Input
//               type="textarea"
//               value={this.state.message}
//               onChange={this.handleChange}
//               name="message"
//             />
//           </FormGroup>

//           <FormGroup tag="fieldset">
//             <legend>Priority</legend>
//             <FormGroup check>
//               <Label check>
//                 <Input
//                   type="radio"
//                   value="High"
//                   checked={this.state.priority === 'High'}
//                   onChange={this.handleChange}
//                   name="priority"
//                 />{' '}
//                 High
//               </Label>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input
//                   type="radio"
//                   value="Medium"
//                   checked={this.state.priority === 'Medium'}
//                   onChange={this.handleChange}
//                   name="priority"
//                 />{' '}
//                 Medium
//               </Label>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input
//                   type="radio"
//                   value="Low"
//                   checked={this.state.priority === 'Low'}
//                   onChange={this.handleChange}
//                   name="priority"
//                 />{' '}
//                 Low
//               </Label>
//             </FormGroup>
//           </FormGroup>
//           <br />

//           <Button type="submit">Submit</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, props) => {
//     const id = props.match.params.id;
//   return {
//     ticket: state.tickets.find(tic => tic._id === id),
//     customers: state.customers,
//     departments: state.departments,
//     employees: state.employees,
//   };
// };

// export default withRouter(connect(mapStateToProps)(TicketForm));
