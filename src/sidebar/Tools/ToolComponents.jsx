import { List, ListItem, ListItemText } from '@material-ui/core';
import mainConfig from "./config.json";



function Toolcomponents(props) {

    const ToolComponents = mainConfig.ToolComponents;

    return (
        <List component="div" disablePadding>
            {ToolComponents.map((item) => (
                <ListItem button key={item.id} style={{ height: "40px" }}>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}

        </List>
    )
}
export default Toolcomponents;