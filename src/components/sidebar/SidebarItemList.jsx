import React from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import mainConfig from "../config.json";
import SidebarIcon from "./SidebarIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import SidebarComponents from './SidebarComponents';
import { useSelector, useDispatch } from 'react-redux';


function SidebarItemList() {
    const sidebarlist = mainConfig.sidebarlist;
    const {
        isSidebarOpen: openSidebar,
        selectedTab: selectTab
    } = useSelector(state => state.isSidebarOpen);

    const dispatch = useDispatch();
    const handleSidebar = (id) => {
        dispatch({
            type: 'HANDLE_SIDEBAR_TABNUM',
            selectedTab: id
        });
    };


    const findItem = (evt) => {
        if (evt === selectTab & openSidebar) {
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
                        <ListItem button onClick={() => handleSidebar(item.id)}>
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