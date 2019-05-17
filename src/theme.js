import { createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#97EAD2',
        },
        secondary: {
            main: '#FFFFFF'
        },
        sunny: {
            main: '#FFF07C',
        },
    },
    typography: {    
        useNextVariants: true,
        fontFamily: 'sans-serif'
    },
    MuiAppBar: {
        shadows: ["none"]
    },

    

});

export default theme;