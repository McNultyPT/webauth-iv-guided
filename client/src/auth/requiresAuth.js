import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(
    function(options) {
    // this function has access to the request options passed to axios
    
        // read the token from localStorage and attach it to the request as the auth header
        options.headers.authorization = localStorage.getItem('jwt');
        // now any component that is rendered by this HOC will attach the token automatically
        
        return options; // return the modified options to axios
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            
            const notLoggedIn = <div>Please Log In to see the users</div>;
            
            return (
                 <> { token ? <Component {...this.props} /> : notLoggedIn } </>
            );
        }
    }
}
