import React, { Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Header from '../../Component/Header';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { TypeActions } from '../../Redux/Types';
import { Signin_me } from '../../Redux/Actions/GetData';
import axios from 'axios';
import Layout from '../../HOCS/Layout';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: true,
            formValue: {
                taiKhoan: '',
                matKhau: '',
            },
        };
    }
    handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        console.log(this.state.formValue);
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value,
            }
        })
    }
    handleClickOpen = () => {
        this.setState({
            setOpen: true,
        });
    };

    handleClose = () => {
        this.setState({
            setOpen: false,
        });
    };
    handleSubmit = () => {
       
        this.props.dispatch(Signin_me(this.state.formValue, this.goToHome))


    };
    goToHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                

                    <Dialog open={this.state.setOpen} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
               
                        <DialogContent>
             

                            <DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    value={this.state.formValue.taiKhoan}
                                    name='taiKhoan'
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    value={this.state.formValue.matkhau}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="passworld"
                                    type="text"
                                    fullWidth
                                    name='matKhau'
                                    onChange={this.handleChange}
                                />
                            </DialogContentText>

                        </DialogContent>

                        <DialogActions>
                            <Button type='submit' onClick={() => this.handleSubmit()} color="secondary" variant="contained">
                                Sign In
                            </Button>

                            <Button type='submit' onClick={() => this.goToHome()} color="primary" variant="contained">
                                Cancel
                            </Button>

                        </DialogActions>
             
                    </Dialog>
               
            </div>
        );
    }
}

export default connect()(Signin);