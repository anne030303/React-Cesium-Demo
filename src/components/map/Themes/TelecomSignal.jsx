import React, { useState, useContext, useEffect } from "react";
import { GeoJsonDataSource } from "resium";
import { Color, EllipseGraphics } from "cesium";
import ViewerContext from "../ViewerContext";
import { useSelector } from 'react-redux';

function TelecomSignal(props) {
    const { day: day, time: time } = (useSelector(state => state.valueOfTelecom));
    const { viewer } = useContext(ViewerContext);
    const [layer, setLayer] = useState(null);
    const metedata = props.item.metedata;
    const handleLayerReady = layer => {
        if (viewer) {
            viewer.zoomTo(layer);
        }
    };
    const handleDataReady = layer => {
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
    }, [day, time]);
    const handleChange = layer => {
        layer.entities.values.forEach(e => {
            let number = e.properties[metedata[day][time]];
            e.billboard = null;
            e.ellipse = new EllipseGraphics({
                center: e.position,
                semiMajorAxis: 3000.0,
                semiMinorAxis: 3000.0,
                material: Color.fromBytes(48, 135, 168),
                extrudedHeight: number / 100
            });
        })
    }

    return (
        <div>
            <GeoJsonDataSource
                key={props.id}
                data={props.item.url}
                onLoad={handleLayerReady}
            />
            <GeoJsonDataSource
                key={props.id}
                data={props.item.data}
                onLoad={handleDataReady}
            // show={false}
            />
        </div>
    )
}

export default TelecomSignal;