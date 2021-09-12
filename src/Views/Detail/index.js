import React, { Component } from 'react';
import Header from '../../Component/Header';
import { fetchCourse } from '../../Redux/Actions/GetData';
import { connect } from 'react-redux';
import { useStyles } from './style';
import { TypeActions} from '../../Redux/Types';
import { CreateAction } from '../../Redux/Actions';
import { Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, withStyles, Paper, ButtonBase } from '@material-ui/core';
class Detail extends Component {

    render() {
        // {maPhim(pin):4668
        //     tenPhim(pin):"Doraemon 5"
        //     biDanh(pin):"doraemon-5"
        //     trailer(pin):"https://www.youtube.com/embed/uiYbbPpobUs"
        //     hinhAnh(pin):"http://movie0706.cybersoft.edu.vn/hinhanh/doraemon-5_gp01.jpg"
        //     moTa(pin):"Ryan Reynolds sẽ thủ vai một chuyên gia bảo vệ, được đánh giá hạng AAA còn Samuel Jackson thì hóa thân nhân vật sát thủ bị săn lùng nhất thế giới. Hai người, như hai kẻ không đội trời chung, nhưng lại bị ép phải “bảo vệ” nhau trong suốt 24 giờ. Thật trớ trêu khi một sát thủ “khét tiếng” mà cũng có lúc cần đến vệ sĩ riêng. Và trên hành trình đồng hành từ Anh đến Hague, họ sẽ phải đối mặt và “xử lý” rất nhiều tình huống nguy hiểm hay sự truy đuổi của nhiều nhóm khác nhau."
        //     maNhom(pin):"GP01"
        //     ngayKhoiChieu(pin):"2021-08-23T00:00:00"}
        const { classes } = this.props;
        const { biDanh, hinhAnh, tenPhim, moTa, ngayKhoiChieu } = this.props.DetailS || {};
        console.log(this.props.DetailS);
        return (
            <div>
                <Header />
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={hinhAnh} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom component="h2" variant="h3" >
                                            Name:
                                            {tenPhim}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom variant="h6">
                                            Description:
                                            {moTa}
                                        </Typography>
                                        <Typography variant="body2" variant="h6">
                                            Release date:
                                            {ngayKhoiChieu}
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
    componentDidMount() {
        console.log(this.props);
        const CourseId = this.props.match.params.id
        this.props.dispatch(fetchCourse(CourseId))
    }
    componentWillUnmount() {
        this.props.dispatch(CreateAction(TypeActions.SET_COURSE_DETAIL,{}))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        DetailS: state.Course.CourseDetail
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(Detail));