import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom'
import { setToken } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        BetaCraft Demo
                    </Typography>
                    { location.pathname === '/dashboard' ? <Button onClick={() => {
                        dispatch(setToken(null))
                        navigate('/login')
                    }} color="inherit">Logout</Button> : null }
                    { location.pathname === '/' || location.pathname === '/register' ? <Button onClick={() => navigate('/login')} color="inherit">Login</Button> : null }
                    { location.pathname === '/' || location.pathname === '/login' ? <Button onClick={() => navigate('/register')} color="inherit">Register</Button> : null }
                </Toolbar>
            </AppBar>
        </Box>
    );
}