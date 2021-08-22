import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import BuildingSlidar from "./BuildingSlidar";
import TelecomSlidar from './TelecomSlidar';



function ThemesComponents(props) {
    const themes = (useSelector(state => state.checkedThemes));
    const dispatch = useDispatch();
    const handleChecked = (id, checked) => {
        dispatch({
            type: 'CHECKEDTHEME',
            id: id
        });
    };


    return (
        <List component="div" disablePadding>
            {themes.map((item) => (
                <div key={item.id}>
                    <ListItem style={{ height: "40px" }}>
                        <Checkbox
                            checked={item.checked}
                            onChange={() => handleChecked(item.id, item.checked)}
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <ListItemText primary={item.name} />

                    </ListItem>
                    {(item.id === 2 && item.checked === true) && < BuildingSlidar />}
                    {(item.id === 1 && item.checked === true) && < TelecomSlidar />}
                </div>
            ))}


        </List>
    )
}
export default ThemesComponents;