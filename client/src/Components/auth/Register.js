import React from 'react';
import { connect } from 'react-redux';
import {startRegister} from '../../actions/userAction';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
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
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push('/users/login');
    };
    this.props.dispatch(startRegister(formData, redirect));
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={this.handleSubmit}>
            <h2 className='text-center'>Register </h2>
            <div className='mb-3'>
            <label htmlFor="username" className='form-label'>username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
            />
            </div>
            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <input type="submit" value="register" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
