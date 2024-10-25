import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from "./rick&morty.svg"
import { styled } from '@mui/material';

const MyButton = styled(Button)({
    fontFamily: '"Karla", serif',
    fontOpticalSizing: "auto",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 18,
    textTransform: "capitalize"
})

export default function Navbar() {
    return (
        <Box>
            <AppBar
                sx={{
                    background: "white",
                    color: "black",
                    padding: "0 10%"
                }}
                position="static"
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 !important"
                    }}
                >
                    <img
                        style={{ marginRight: "auto" }}
                        src={logo} alt="rick&morty"
                    />
                    <MyButton color="inherit">Characters</MyButton>
                    <MyButton color="inherit">Locations</MyButton>
                    <MyButton color="inherit">Episodes</MyButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}