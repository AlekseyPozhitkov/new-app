import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyInput() {
    return (
        <Box
            component="form"
            sx={{ flex: "0 1 calc(100% / 4 - 10px * 3 / 4)" }}
            noValidate
            autoComplete="off"
        >
            <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
        </Box>
    );
}