import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/userAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push('/users/home');
    };
    this.props.dispatch(startLogin(formData, redirect));
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
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
            <div className='d-grid '>
            <input type="submit" value="login" className="btn btn-primary" />
            </div>  
            <p className='text-center'> or </p>
            <p className='text-center'>
            <Link to='/users/register'>Register</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
