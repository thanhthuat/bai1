import React, { Component } from 'react';
import Detail from './Views/Detail';
import Home from './Views/Home';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import theme from './Theme';
import { getMe } from './Redux/Actions/GetData';
import {connect} from 'react-redux';
import {AuthRoute,PrivateRoute} from '../src/HOCS/AutRoute/index'
import Profile from './Views/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <ThemeProvider theme={theme}>
        <Switch>
          <PrivateRoute path='/detail/:id' Component={Detail} redirectPath='/signin'></PrivateRoute>
          {/* <Route path='/signin' component={Signin}></Route> */}
          <PrivateRoute path='/me' Component={Profile} redirectPath='/signin'></PrivateRoute>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/' exact component={Home}></Route>
          <AuthRoute path='/signin' Component={Signin} redirectPath='/'></AuthRoute>
          
        </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
  componentDidMount(){
    this.props.dispatch(getMe);
   }
}

export default connect() (App);