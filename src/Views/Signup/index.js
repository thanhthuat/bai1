import React, { Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Header from '../../Component/Header';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { TypeActions } from '../../Redux/Types';
import { Signup_me } from '../../Redux/Actions/GetData';
import axios from 'axios';
import Layout from '../../HOCS/Layout';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: true,
            formValue: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: '',
                maNhom: "GP01",
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
        
        this.props.dispatch(Signup_me(this.state.formValue))
        


    };

    render() {
        return (
            <div>
                <Layout>
                    <Dialog open={this.state.setOpen} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>

                        <DialogContent>
                            {/* "taiKhoan": "string",
  "matKhau": "string",
  "email": "string",
  "soDt": "string",
  "maNhom": "string",
  "maLoaiNguoiDung": "string",
  "hoTen": "string" */}

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

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email"
                                type="email"
                                fullWidth
                                name='email'
                                value={this.state.formValue.email}
                                onChange={this.handleChange}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Your phone"
                                type="text"
                                fullWidth
                                name='soDT'
                                onChange={this.handleChange}
                                value={this.state.formValue.soDT}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Your name"
                                type="text"
                                onChange={this.handleChange}
                                name="hoTen"
                                fullWidth
                            />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={() => this.handleSubmit()} color="secondary" variant="contained">
                                Sign In
                            </Button>
                            <NavLink to='/' >
                                <Button onClick={() => this.handleClose()} color="primary" variant="contained">
                                    Cancel
                                </Button>
                            </NavLink>
                        </DialogActions>

                    </Dialog>
                </Layout>

            </div>
        );
    }
}

export default connect()(Signup);