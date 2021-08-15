import React from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';



function Layercomponents(props) {
    const layers = (useSelector(state => state.checkedLayers));
    const dispatch = useDispatch();
    const handleChecked = (id) => {
        dispatch({
            type: 'CHECKEDLAYER',
            id: id
        });

    };

    return (
        <List component="div" disablePadding>
            {layers.map((item) => (
                <ListItem key={item.id} style={{ height: "40px" }}>
                    <Checkbox
                        checked={item.checked}
                        onChange={() => handleChecked(item.id)}
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}

        </List>
    )
}
export default Layercomponents;