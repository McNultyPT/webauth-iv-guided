import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Login from './login/Login';
import Users from './users/users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            &nbsp; |&nbsp;
            <NavLink to='/login'>Login</NavLink>
            &nbsp; |&nbsp;
            <NavLink to='/users'>Users</NavLink>
            &nbsp; |&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route exact path='/' />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(App);
