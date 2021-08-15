import React, { useState, useContext, useEffect } from "react";
import { GeoJsonDataSource } from "resium";
import { Color } from "cesium";
import ViewerContext from "../ViewerContext";
import { useSelector } from 'react-redux';

function BuildingPage(props) {
    const { viewer } = useContext(ViewerContext);
    const [layer, setLayer] = useState(null);
    const value = (useSelector(state => state.valueOfBuildingThreshold));
    const handleReady = layer => {
        setLayer(layer);
        handleChange(layer);
        if (viewer) {
            viewer.zoomTo(layer);
        }
    };
    useEffect(() => {
        if (layer) {
            handleChange(layer);
        }
    }, [value]);

    const handleChange = layer => {
        layer.entities.values.forEach(e => {
            e.polygon.extrudedHeight = e.properties.建物樓層數 * 3;
            e.polygon.outline = false;
            if (e.properties.建物樓層數 < value) {
                e.polygon.material = Color.RED;
            } else {
                e.polygon.material = Color.GREEN;
            }
            // outlineColor
        })
    }

    return <GeoJsonDataSource
        key={props.id}
        data={props.item.url}
        onLoad={handleReady}
    />
}

export default BuildingPage;