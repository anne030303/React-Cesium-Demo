import React from "react";
import "./Sidebar.css";
import { Drawer } from '@material-ui/core';
import SidebarItemList from './SidebarItemList';
import myStyle from "../Style";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

const drawerWidth = 240;
const sidebarStyle = makeStyles((theme) => ({
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}), { name: 'MuiDrawer' });

function Sidebar() {
    const classes = myStyle();
    const drawer = sidebarStyle();
    const { isSidebarOpen: openSidebar } = useSelector(state => state.isSidebarOpen);
    const dispatch = useDispatch();
    const handleSidebar = () => {
        dispatch({
            type: 'HANDLE_SIDEBAR_BOOLEAN',
            isSidebarOpen: openSidebar
        });
    };

    return (
        <div id="sidebar">
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [drawer.drawerOpen]: openSidebar,
                    [drawer.drawerClose]: !openSidebar,
                })}
                classes={{
                    paper: clsx({
                        [drawer.drawerOpen]: openSidebar,
                        [drawer.drawerClose]: !openSidebar,
                    }),
                }}
            >
                <div>
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleSidebar}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <SidebarItemList />
                    {/* <div style={{ backgroundColor: "black", height: "100px" }} /> */}
                </div>
            </Drawer>
        </div>
    )
}


export default Sidebar;