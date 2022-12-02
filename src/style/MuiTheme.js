import { createTheme } from '@mui/material/styles';
import { blueGrey, green, purple } from '@mui/material/colors';


export const MuiTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "red",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "red",
                color: "red",
            },
        },
        MuiPickersDay: {
            day: {
                color: "light-gray",
                fontFamily: "\"Do Hyeon\", sans-serif",
                backgroundColor: "white",
                borderRadius: "0px",
            },
            container: {
                backgroundColor: "black"
            },
            daySelected: {
                backgroundColor: "",
                color: "light-gray"
            },
            dayDisabled: {
                color: "black",
            },
            current: {
                color: "",
            },
        },
    },
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: green[500],
        },
        neutral: {
            main: blueGrey[600],
            contrastText: 'black',
        },
    },

});