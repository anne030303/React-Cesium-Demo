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

const drawerWidth = 240;

const headerStyle = makeStyles((theme) => ({
    root: {
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


function Header(props) {
    const classes = myStyle();
    const appbar = headerStyle();

    return (
        <div id="header">
            <AppBar
                position="fixed"
                className={clsx(appbar.root, {
                    [appbar.appBarShift]: props.openSidebar
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => props.handleSidebar(props.openSidebar)}
                        edge="start"
                        className={clsx(classes.menuButton)}
                        style={{ display: props.openSidebar && 'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        My Map
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header;