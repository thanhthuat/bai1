import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';

const createRoute =(condition) =>{
    return class extends React.Component {
        render(){
            const {path,Component:RouteComp,redirectPath,exact} =this.props;
            //Component:RouteComp bóc tách rồi đặt tên lại =RouteComp
            return(
                <Route path={path}
                exact={exact}
                 render ={(routeProps)=>{if(condition()){
                    return <RouteComp {...routeProps}/>
                }
                return <Redirect to={redirectPath}/>
            }
                
            }>
                    
                </Route>)
        }
    }
}
// guard route sign in /sign up

export const AuthRoute = createRoute(()=> !localStorage.getItem('user'));
export const PrivateRoute = createRoute(()=> localStorage.getItem('user'))