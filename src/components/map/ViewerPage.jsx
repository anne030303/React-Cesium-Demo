import React, { useState, useEffect } from "react";
import { Viewer, Camera } from "resium";
import "./ViewerPage.css";
import ViewerContext from "./ViewerContext";
import { useSelector } from 'react-redux';
import Layers from './Layers/Layers';
import Themes from './Themes/Themes'


const ViewerPage = () => {
    let [viewer, setview] = useState(); // This will be raw Cesium's Viewer object.
    const mapControls = useSelector(state => state.mapControls);

    // useEffect(() => {
    //     if (viewer) {
    //         console.log("viewer");
    //     }
    // });

    return (
        <ViewerContext.Provider value={{ viewer }}>
            <Viewer
                className="cesiumView"
                ref={e => {
                    if (e) { setview(e.cesiumElement) }
                }}
                geocoder={mapControls.geocoder}
                homeButton={mapControls.homeButton}
                sceneModePicker={mapControls.sceneModePicker}
                baseLayerPicker={mapControls.baseLayerPicker}
                navigationHelpButton={mapControls.navigationHelpButton}
                animation={mapControls.animation}
                timeline={mapControls.timeline}
                fullscreenButton={mapControls.fullscreenButton}
                infoBox={mapControls.infoBox}
            >
                <Camera />
                <Layers />
                <Themes />
            </Viewer>


        </ViewerContext.Provider>

    );
};

export default ViewerPage;