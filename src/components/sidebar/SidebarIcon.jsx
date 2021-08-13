import ListItemIcon from '@material-ui/core/ListItemIcon';
import LayersIcon from '@material-ui/icons/Layers';
import AppsIcon from '@material-ui/icons/Apps';
import MapIcon from '@material-ui/icons/Map';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Switch = props => {
    const { test, children } = props
    // filter out only children with a matching prop
    return children.find(child => {
        return child.props.value === test
    })
}

function SidebarIcon(props) {
    return (
        <ListItemIcon>
            <Switch test={props.icon}>
                <div value="Layers"><LayersIcon /></div>
                <div value="Tools"><AppsIcon /></div>
                <div value="My maps"><MapIcon /></div>
                <div value="Themes"><DashboardIcon /></div>
            </Switch>
        </ListItemIcon>
    );
}

export default SidebarIcon;