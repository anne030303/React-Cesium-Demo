import React, { useState } from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            height: "40px"
        },
    },
}));

function MymapsComponents(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <List component="div" disablePadding className={classes.root}>
            <ListItem style={{ height: "10px" }}>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClick}>
                    <AddIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '20ch',
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>Add Shapefile</MenuItem>
                    <MenuItem onClick={handleClose}>Add GeoJSON</MenuItem>
                    <MenuItem onClick={handleClose}>Draw Point</MenuItem>
                    <MenuItem onClick={handleClose}>Draw Line</MenuItem>
                    <MenuItem onClick={handleClose}>Draw Polygon</MenuItem>
                </Menu>
                <ListItemText primary="Add Item" />
            </ListItem>
        </List>
    )
}
export default MymapsComponents;