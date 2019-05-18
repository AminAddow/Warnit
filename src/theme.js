import { createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#97EAD2', // Pale robin Egg blue
            light: '#272727', //raisin black
            dark: '#65B49D', // Darker pale robin
        },
        secondary: {
            main: '#FFFFFF', //white
            dark: '#FFF07C', // sunny
            light: '#F0E9B6' // sunny light
        },
        contrast: {
            main: "#FFFFFF", //
            dark: "#ACACAC", 
            light: "#FFFFFF"
        }
  
       
    },
    typography: {    
        useNextVariants: true,
        fontFamily: 'Segoe UI'
    },
    MuiAppBar: {
        shadows: ["none"]
    },

    

});

export default theme;