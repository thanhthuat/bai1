import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar,IconButton,withStyles,Typography} from '@material-ui/core';
import Signin from '../../Views/Signin';
import {connect} from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {styles} from './styles'

import HomeIcon from '@material-ui/icons/Home';
import Profile from '../../Views/Profile';

class Header extends Component {
    render() {
        console.log(this.props);
        const {Me}=this.props;
        const { title, navLink, activeNavLink } = this.props.classes;
        return (
            <AppBar position="static">
                <Toolbar>
                <NavLink to='/'><HomeIcon fontSize="large"  /></NavLink>
                
                <Typography className={title} variant="h6">
            Movie
          </Typography>
                    <NavLink className={navLink} to='/' exact activeStyle={{color:'#123ffs'}} style={{marginRight:20,color:'fff'}}>Home</NavLink>
                    {Me?(<> <span>hello {Me.hoTen.toUpperCase()} </span>   <NavLink className={navLink} to='/me' >  <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton></NavLink> </>):<> <NavLink className={navLink} to='/signin' activeStyle={{color:'#123ffs'}} style={{marginRight:20,color:'fff'}}>signin</NavLink>
                    <NavLink className={navLink} to='/signup' activeStyle={{color:'#123ffs'}} style={{marginRight:20,color:'fff'}}>Signup</NavLink></>}
               
                   
                </Toolbar>
            </AppBar>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Me: state.User.Me
    }
}
export default connect( mapStateToProps)(withStyles(styles)(Header));
