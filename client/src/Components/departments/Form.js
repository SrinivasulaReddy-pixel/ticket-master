import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findDepartment } from '../../selectors/findDepartment';

class DepartmentsForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: props.department ? props.department.name : ''
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
    };
    console.log('dept',this.props)
    this.props.handleSubmit(formData)
  };
  render() {
    return (
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" className='form-label'> name </label>
          <input
            type="text"
            value={this.state.name}
            id='name'
            name="name"
            onChange={this.handleChange}
            className='form-control'
          />
          <br />
          <input type="submit" value="submit" className='btn btn-primary btn-sm'/>
        </form>
      </div>
      </div>
    );
  }
}
const mapStateToProps =(state,props)=>{
    const id= props.match.params.id
    return {
        department: findDepartment(state.departments, id)
    }
}

export default withRouter(connect(mapStateToProps)(DepartmentsForm));
