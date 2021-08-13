import React, { useState } from "react";
import { Viewer } from "resium";
import "./ViewerPage.css";
import LayersConfig from "../sidebar/Layer/config.json";
// import ViewerContext from "./ViewerContext";


const ViewerPage = () => {
    // let [viewer, setview] = useState(); // This will be raw Cesium's Viewer object.
    const [checkedItems, setCheckedItems] = useState({});
    const LayerComponents = LayersConfig.LayerComponents;
    // window.emitter.addListener('checked', function (checked, id) {
    //     let target = LayerComponents.filter(item => item.id === id)
    //     setCheckedItems({
    //         ...checkedItems,
    //         [target[0].name]: checked
    //     })
    // });

    return (
        // <ViewerContext.Provider value={{ viewer }}>
        <Viewer
            className="cesiumView"
            // full
            ref={e => {
                if (e) { window.map = e.cesiumElement }
                // if (e) { setview(e.cesiumElement) }
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

        // </ViewerContext.Provider>

    );
};

export default ViewerPage;