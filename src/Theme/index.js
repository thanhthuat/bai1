import { createMuiTheme} from "@material-ui/core";
const theme = createMuiTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:576,
            md:768,
            lg:992,
            xl:1200,
        }
    },
    palette:{
        primary:{
            main:'#d91a21',
            light:'#e04646',
            dark:'#7a2020',
            contrastText:'#fff'
        },
        secondary:{
            main:'#ffdd01',
            light:'#ffd01',
            dark:'#fbb512',
            contrastText:'#000'
        },
        c1:{
            main:'#c81298',
            light:'#e37bc7',
            dark:'#e37bc7',
            contrastText:'#000',
        }
    },
})

export default theme;