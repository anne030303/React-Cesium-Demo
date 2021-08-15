import React, { useContext } from "react";
import { GeoJsonDataSource } from "resium";
import ViewerContext from "../ViewerContext";

function GeoJSONTemplate(props) {
    const { viewer } = useContext(ViewerContext);
    const handleReady = layer => {
        if (viewer) {
            viewer.zoomTo(layer);
        }
    };
    return <GeoJsonDataSource
        key={props.id}
        data={props.path}
        onLoad={handleReady}
    // markerColor={props.color}
    />
}

export default GeoJSONTemplate;