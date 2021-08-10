import { List, ListItem, ListItemText } from '@material-ui/core';
import mainConfig from "./config.json";
import Checkbox from '@material-ui/core/Checkbox';



function ThemesComponents(props) {

    const ThemesTitle = mainConfig.ThemesTitle;

    return (
        <List component="div" disablePadding>
            {ThemesTitle.map((item) => (
                <ListItem key={item.id} style={{ height: "40px" }}>
                    <Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}

        </List>
    )
}
export default ThemesComponents;