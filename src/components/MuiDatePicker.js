import React, { useEffect, useState } from 'react';
import { DatePicker, MobileDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { Stack } from '@mui/system';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../style/MuiTheme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Switch } from '@mui/material';



const MuiDatePicker = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [dateValue, setDateValue] = useState(moment)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    useEffect(() => {
        // console.log(moment().utc());
    }, [dateValue])

    const popperSxLight = {
        "& .MuiPaper-root": {
            backgroundColor: "smokeWhite"
        },
        "& .MuiCalendarPicker-root": {
            backgroundColor: "darkGrey"
        },
        "& .MuiPickersDay-dayWithMargin": {
            color: "black",
            backgroundColor: "silver"
        },
        "& .MuiDayPicker-header": {
            backgroundColor: "white"
        },
        "& .MuiDayPicker-weekDayLabel": {
            color: "black"
        },
        "& .MuiTabs-root": { backgroundColor: "dark" }
    };
    const popperSxDark = {
        "& .MuiPaper-root": {
            backgroundColor: "darkGrey"
        },
        "& .MuiCalendarPicker-root": {
            backgroundColor: "silver",
            color: "blue"
        },
        "& .MuiPickersDay-dayWithMargin": {
            color: "black",
            backgroundColor: "silver"
        },
        "& .MuiDayPicker-header": {
            backgroundColor: "black"
        },
        "& .MuiDayPicker-weekDayLabel": {
            color: "white"
        },
        "& .MuiTabs-root": { backgroundColor: "dark" }
    };
    return (
        <div>
            <section className='header'>Date Picker</section>
            <div>
                <ThemeProvider theme={MuiTheme}>
                    <Stack spacing={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDateTimePicker
                                DialogProps={{ sx: (darkMode) ? popperSxDark : popperSxLight }} // for mobile
                                // PopperProps={{ sx: popperSx }} // for native
                                minDate={moment('2001')}
                                maxDate={moment('2100-12-01')}
                                // views={["year", "month", "day"]}
                                label="From"
                                value={dateValue}
                                onChange={(newValue) => {
                                    setDateValue(newValue);
                                }}
                                renderInput={(values) => <TextField {...values} />}
                            />
                            {/* <DatePicker
                            views={["year", "month"]}
                            label="Year"
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(values) => <TextField {...values} />}
                        />
                        <DatePicker
                            views={["year", "month", "day"]}
                            label="Year"
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(values) => <TextField {...values} />}
                        /> */}
                        </LocalizationProvider>
                    </Stack>
                </ThemeProvider>
                {/* <span>Selected Date : {dateValue._d}</span> */}
            </div>
            <Switch
                {...label}
                onChange={() => { setDarkMode(!darkMode) }}
            />
            <Switch {...label} defaultChecked color="secondary" />
        </div>
    )
}
export default MuiDatePicker