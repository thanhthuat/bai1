import axios from "axios";
import { TypeActions } from "../Types";
import { CreateAction } from ".";
//async action
export const fetchCourses = (dispatch) => {
    //side-effect : hành động nhằm thay đổi 1 state nằm ngoài scope của function
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        dispatch(CreateAction(TypeActions.GET_DATA, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const fetchCourse = (me) => {
    return (dispatch) => {
      axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
        params: {
          MaPhim: me,
        },
      })
        .then((res) => {
          //dispatch action lên store, gửi detail lên lưu lại
          dispatch(CreateAction(TypeActions.SET_COURSE_DETAIL, res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const Signup_me = (me) => {
    return (dispatch) => {
        axios({
          method: "POST",
          url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",
          data: me,
        })
          .then((res) => {
            console.log(res);
            alert("dang ky thanh cong")
          })
          .catch((err) => {
            
          let datta=  {...err.response}
          console.log(datta);
              alert(datta.data.content)
          });
    };
  };

  export const Signin_me= (me,cb) => {
    return (dispatch) => {
      console.log('Signin',me);
        axios({
          method: "POST",
          url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
          data: me,
        })
          .then((res) => {
            console.log(res);
             dispatch(CreateAction(TypeActions.SET_ME, res.data.content));
             localStorage.setItem('user',res.data.content.accessToken)
             cb()
          })
          .catch((err) => {
          let datta=  {...err.response}
          console.log('err',err);
             // alert(datta.data.content)
          });
    };
  };
  export const abc= () => {
    return (dispatch) => {
      
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
    };
  };


  export const getMe =  (dispatch) => {
        axios({
          method: "POST",
          url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
          headers: {
            Authorization: "Bearer " + localStorage.getItem('user'),
          },
         
        })
          .then((res) => {
            console.log('f5',res);
            dispatch(CreateAction(TypeActions.SET_ME, res.data.content));
          })
          .catch((err) => {
          console.log('errrf5',err);
          });
    };

