import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LayerComponents from "./Layer/LayerComponents"
import ToolComponents from "./Tools/ToolComponents"
import MymapsComponents from "./Mymaps/MymapsComponents"
import ThemesComponents from "./Themes/ThemesComponents"

const myStyle = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(1),
    },
}));

const Switch = props => {
    const { test, children } = props
    // filter out only children with a matching prop
    return children.find(child => {
        return child.props.value === test
    })
}

function SidebarComponents(props) {
    const classes = myStyle();
    return (
        <div>
            <Switch test={props.name}>
                <div value="Layers" className={classes.nested}><LayerComponents /></div>
                <div value="Tools" className={classes.nested}><ToolComponents /></div>
                <div value="My maps"><MymapsComponents /></div>
                <div value="Themes" className={classes.nested}><ThemesComponents /></div>
            </Switch>
        </div>
    )
}
export default SidebarComponents;