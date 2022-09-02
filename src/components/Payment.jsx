import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import "../styles/paymentStyle.css"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';


// var isBetween = require('dayjs/plugin/isBetween')
// dayjs.extend(isBetween)

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const Payment = () => {
    const [value, setValue] = React.useState(null);

    const [values, setValues] = React.useState({
        cvc: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className='pay'>
            <Box>
                <Box id="labelPay">
                    <Typography variant='h4' sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        Payment
                    </Typography>
                </Box>
                <Box id="mainBox">
                    <Box id="payInp">
                        <TextField sx={{ m: 1 }}fullWidth label="Card number (16)" id="fullWidth" />
                    </Box>
                    <Box sx={{ m: 1, display: 'flex', flexWrap: 'wrap', bgcolor: "white"}} id="cvcAndDate">
                        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ ml: 7, width: "50%" }} className="extra">
                            <DatePicker
                                label="Date"
                                views={['month','year']}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <TextField
                            inputProps={{ maxLength: 3 }}
                            id="outlined-start-adornment"
                            sx={{ml:1, display: 'flex', flexWrap: 'wrap' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">CVC/CVV</InputAdornment>,
                            }}
                        />
                    </Box>
                    <Box className="payInp">
                        <TextField sx={{ m: 1, width:"100%"}}fullWidth label="NAME AND SURNAME" id="fullWidth"  />
                    </Box>
                </Box>
            </Box>
            <Link href='/' style={{textDecoration: 'none'}}>
                <Button gap={2} width={1.0} id="butt" variant="contained" sx={{ alignItems: 'center' }}>Send</Button>
            </Link>
        </div>
    );
};

export default Payment;