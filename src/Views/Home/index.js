import React, { Component } from 'react';
import Header from '../../Component/Header';
import { Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
import styles from './styles'
import { fetchCourses,abc } from '../../Redux/Actions/GetData';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Signin from '../Signin';
import axios from 'axios';
import Layout from '../../HOCS/Layout';
class Home extends Component {
    render() {
        //  const {classes}= this.props;
        console.log(this.props.List_Course);
        return (
            <div>
                <Layout>
                    <Typography component='h1' variant='h2' gutterBottom align='center'  >
                        Danh sach Phim
                    </Typography>
                    <Container maxWidth="lg">
                        <Grid container spacing={2}>
                            {this.props.List_Course.map((sp, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={index} spacing={2}>
                                        <Card >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    src={sp.hinhAnh}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {sp.biDanh}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button variant="contained" color="primary">
                                                    <NavLink to={`/detail/${sp.maPhim}`} size="small" color="secondary">
                                                       Detail
                                                    </NavLink >
                                                </Button>

                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>

                                )
                            })}


                        </Grid>
                    </Container>
                </Layout>

            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchCourses)
        
        axios({
            method:"GET",
             url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
            
           })
             .then((res) => {
               console.log('Loai nguoi dung:',res);
               
             })
             .catch((err) => {
             let datta=  {...err.response}
             console.log('err',err);
                // alert(datta.data.content)
             });
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        List_Course: state.Course.ListCourse,
    }
}

export default  /*withStyles(styles)*/ connect(mapStateToProps)(Home);