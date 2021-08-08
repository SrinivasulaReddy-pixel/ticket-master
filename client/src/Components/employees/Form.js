import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Button, FormGroup, Input,Label} from 'reactstrap';
import { findEmployee } from '../../selectors/findEmployee';

class EmployeesForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: props.employee ? props.employee.name : '',
      email: props.employee ? props.employee.email: '',
      mobile: props.employee ? props.employee.mobile: '',
      department: props.employee ? props.employee.department: ''
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email:this.state.email,
      mobile: this.state.mobile,
      department: this.state.department
    };
    this.props.employee && (formData.id = this.props.employee._id);
    console.log('emp', this.props);
    this.props.handleSubmit(formData);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="name" className='form-label'>Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                /><br/>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email" className='form-label'>Email</Label>
              <Input
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              /><br/>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="mobile" className='form-label'>Mobile</Label>
              <Input
                type="text"
                id="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
              /><br/>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="department" className='form-label'>Department</Label>
              <Input
                type="select"
                id="department"
                value={this.state.department}
                onChange={this.handleChange}
                name="department"
              >
                <option value="">select</option>
                {this.props.departments.map((department) => {
                  return (
                    <option key={department._id} value={department._id}>
                      {department.name}
                    </option>
                  );
                })}
              </Input>
              <br/>
            </FormGroup>
            <Button type="submit" value="submit" color='primary'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    employee: findEmployee(state.employees, id),
    departments: state.departments
  };
};

export default withRouter(connect(mapStateToProps)(EmployeesForm));
