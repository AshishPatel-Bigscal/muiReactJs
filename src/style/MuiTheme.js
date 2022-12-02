import { createTheme } from '@mui/material/styles';
import { blueGrey, green, purple } from '@mui/material/colors';


export const MuiTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: green[900],
        },
        secondary: {
            // This is green.A700 as hex.
            main: green[500],
        },
        neutral: {
            main: blueGrey[600],
            contrastText: purple,
        },
    },
    components: {
        MuiPaper: {
            backgroundColor: "red"
        }
    }
});