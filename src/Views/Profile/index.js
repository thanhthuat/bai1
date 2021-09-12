import React, { Component } from 'react';
import Header from '../../Component/Header';
import { fetchCourse } from '../../Redux/Actions/GetData';
import { connect } from 'react-redux';
import { useStyles } from './style'
import { Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, withStyles, Paper, ButtonBase } from '@material-ui/core';
class Profile extends Component {

    render() {
        const { classes } = this.props;
        const {email,hoTen,soDT,taiKhoan} = this.props.Profile|| {};
        console.log(this.props.Profile);
        return (
            <div>
                {/* email: "thanhthuat077@gmail.com"
hoTen: "thuat tran"
loaiNguoiDung: null
maNhom: "GP00"
matKhau: "12345678"
soDT: null
taiKhoan: "thanhthuat" */}

                <Header />
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src='https://picsum.photos/700/900'/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom component="h2" variant="h5" >
                                            Name:{hoTen}
                                            
                                        </Typography>
                                        <Typography variant="body2" gutterBottom variant="h6">
                                            Email:{email}
                                          
                                        </Typography>
                                        <Typography variant="body2" gutterBottom variant="h6">
                                            PHONE:{soDT}
                                          
                                        </Typography>
                                        <Typography variant="body2" variant="h6">
                                            Tai Khoan :{taiKhoan}
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        );
    }
 
}
const mapStateToProps = (state, ownProps) => {
    return {
        Profile: state.User.Me
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(Profile));