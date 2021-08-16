import React from "react";
import "./Header.css";
import 'react-pro-sidebar/dist/css/styles.css';
import myStyle from "../Style";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const headerStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}), { name: 'MuiAppBar' });


function Header() {
    const classes = myStyle();
    const appbar = headerStyle();
    const { isSidebarOpen: openSidebar } = useSelector(state => state.isSidebarOpen);
    const dispatch = useDispatch();
    const handleSidebar = () => {
        dispatch({
            type: 'HANDLE_SIDEBAR_BOOLEAN',
            isSidebarOpen: openSidebar
        });
    };

    return (
        <div id="header">
            <AppBar
                position="fixed"
                className={clsx(appbar.root, {
                    [appbar.appBarShift]: openSidebar
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleSidebar}
                        edge="start"
                        className={clsx(classes.menuButton)}
                        style={{ display: openSidebar && 'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        My Map
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header;