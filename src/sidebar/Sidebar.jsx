import React from "react";
import 'react-pro-sidebar/dist/css/styles.css';
import "./Sidebar.css";
import { Drawer } from '@material-ui/core';
import SidebarItemList from './SidebarItemList';
import myStyle from "../Style";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from '@material-ui/core/styles';

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

function Sidebar(props) {
    const classes = myStyle();
    const drawer = sidebarStyle();

    return (
        <div id="sidebar">
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [drawer.drawerOpen]: props.openSidebar,
                    [drawer.drawerClose]: !props.openSidebar,
                })}
                classes={{
                    paper: clsx({
                        [drawer.drawerOpen]: props.openSidebar,
                        [drawer.drawerClose]: !props.openSidebar,
                    }),
                }}
            >
                <div>
                    <div className={classes.toolbar}>
                        <IconButton onClick={() => props.handleSidebar(props.openSidebar)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <SidebarItemList
                        openSidebar={props.openSidebar}
                        selectTab={props.selectTab}
                        handleSidebar={props.handleSidebar} />
                    {/* <div style={{ backgroundColor: "black", height: "100px" }} /> */}
                </div>
            </Drawer>
        </div>
    )
}


export default Sidebar;