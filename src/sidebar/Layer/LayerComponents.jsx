import React from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import mainConfig from "./config.json";
import Checkbox from '@material-ui/core/Checkbox';



function Layercomponents(props) {
    const [checked, setChecked] = React.useState(false);
    const LayerComponents = mainConfig.LayerComponents;


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <List component="div" disablePadding>
            {LayerComponents.map((item) => (
                <ListItem key={item.id} style={{ height: "40px" }}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
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