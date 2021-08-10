import React, { useState } from "react";
import { Viewer } from "resium";
import "./ViewerPage.css";
import ViewerContext from "./ViewerContext";


const ViewerPage = () => {
    let [viewer, setview] = useState(); // This will be raw Cesium's Viewer object.


    return (
        <ViewerContext.Provider value={{ viewer }}>
            <Viewer
                className="cesiumView"
                // full
                ref={e => {
                    if (e) { setview(e.cesiumElement) }
                    // viewer = e && e.cesiumElement;
                }}
                geocoder={false}
                homeButton={false}
                sceneModePicker={false}
                baseLayerPicker={false}
                navigationHelpButton={false}
                animation={false}
                timeline={false}
                fullscreenButton={false}
                infoBox={false}
            >

            </Viewer>

        </ViewerContext.Provider>

    );
};

export default ViewerPage;