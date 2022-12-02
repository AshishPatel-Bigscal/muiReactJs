import React, { useEffect, useState } from 'react';
import { DatePicker, MobileDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { Stack } from '@mui/system';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../style/MuiTheme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



const MuiDatePicker = () => {
    const darkMode = true;
    const [dateValue, setDateValue] = useState(moment)

    useEffect(() => {
        // console.log(moment().utc());
    }, [dateValue])

    const popperSx = {
        "& .MuiPaper-root": {
            backgroundColor: (darkMode) ? "darkGrey" : "smokeWhite"
        },
        "& .MuiCalendarPicker-root": {
            backgroundColor: "darkGrey"
        },
        "& .MuiPickersDay-dayWithMargin": {
            color: "black",
            backgroundColor: "silver"
        },
        "& .MuiDayPicker-header": {
            backgroundColor: (darkMode) ? "black" : "white"
        },
        "& .MuiDayPicker-weekDayLabel": {
            color: (darkMode) ? "white" : "black",
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
                                DialogProps={{ sx: popperSx }} // for mobile
                                // PopperProps={{ sx: popperSx }} // for native
                                minDate={moment('2001')}
                                maxDate={moment('2100-12-01')}
                                // views={["year", "month", "day"]}
                                label="Year"
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
        </div>
    )
}
export default MuiDatePicker