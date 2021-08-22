import React from "react";
import ThemeConfig from '../../sidebar/Themes/config.json';
import Cesium3DTilesetTemplate from '../Templates/cesium3DTileset';
import GeoJSONTemplate from '../Templates/geojson';
import BuildingPage from './BuildingPage';
import TelecomSignal from './TelecomSignal';

function ThemeItem(props) {
    const themeLayers = ThemeConfig[props.item.componentname];

    const Switch = props => {
        const { test, children } = props
        // filter out only children with a matching prop
        return children.find(child => {
            return child.props.value === test
        })
    }

    return (
        <div>
            {themeLayers.map((item) => (
                <Switch test={item.datatype} key={item.id}>
                    <div value="3DTile">
                        <Cesium3DTilesetTemplate
                            key={item.id}
                            id={item.id}
                            modelname={item.modelname}
                            url={item.url}
                        />
                    </div>
                    <div value="geojson">
                        <GeoJSONTemplate
                            key={item.id}
                            id={item.id}
                            path={item.url}
                        />
                    </div>
                    <div value="geojsonBuilding">
                        <BuildingPage
                            key={item.id}
                            id={item.id}
                            item={item}
                        />
                    </div>
                    <div value="geojson_Telecom">
                        <TelecomSignal
                            key={item.id}
                            item={item}
                        />
                    </div>
                </Switch>
            ))}

        </div>
    )
}


export default ThemeItem;