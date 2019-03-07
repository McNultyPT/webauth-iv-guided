import React, { Component } from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';
// ^ It's an HOC

class Users extends React.Component {
    state = {
        users: [],
    }
    
    render() {
        return (
            <div>
                <h2>List of Users</h2>
                <ul>
                    {this.state.users.map(user => {
                        return (
                            <li key={user.id}>{user.username}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        axios.get('/users').then(res => {
            this.setState({ users: res.data })
        });
    }
}

export default requiresAuth(Users);