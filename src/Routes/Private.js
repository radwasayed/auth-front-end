import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Base from '../Base';

const PrivateRoute = ({ component: Component, isAuthenticated, isAdmin, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated && isAdmin ? (
            <Base>
                <Component {...props}/>
            </Base>
        ) : (
            <Redirect to={{
                pathname: './login',
                state: {from: props.location}
            }}/>
        )
    )}/>

);

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.Auth.isAuthenticated,
        isAdmin: state.Auth.isAdmin,
    }
};

export default connect(mapStateToProps)(PrivateRoute);
