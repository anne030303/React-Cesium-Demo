import React from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import mainConfig from "../config.json";
import SidebarIcon from "./SidebarIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import SidebarComponents from './SidebarComponents';



function SidebarItemList(props) {
    const sidebarlist = mainConfig.sidebarlist;


    const findItem = (evt) => {
        if (evt === props.selectTab & props.openSidebar) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <List>
                {sidebarlist.map((item) => (
                    <div key={item.id}>
                        <ListItem button onClick={() => props.handleSidebar(item.id)}>
                            <SidebarIcon icon={item.name} />
                            <ListItemText primary={item.name} />
                            {findItem(item.id) ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={findItem(item.id)} timeout="auto" unmountOnExit>
                            <SidebarComponents name={item.name} />
                        </Collapse>
                    </div>
                ))}
            </List>
        </div>
    )
}
export default SidebarItemList;
// style={{ position: "fixed", bottom: 0 }}