import theme from "../../Theme"
const styles ={
    bgDark:{
        backgroundColor:'#4a79a1',
    },
    title:{
        marginTop:20,
        fontSize:30,
        color:'#fff',
    },
    btnDetail:{
        color:theme.palette.c1.contrastText,
        backgroundColor:theme.palette.c1.main,
        "&:hover":{backgroundColor:theme.palette.c1.dark},
    },
}
//https://miro.medium.com/max/1024/1*92OdlxNqI3iChI5kNl1MFg.jpeg
export default styles