import React from "react";
import './CesiumMap.css'
import myStyle from "../Style";
import ViewerPage from "./ViewerPage"

function CesiumMap(props) {
    const classes = myStyle();
    return (
        <div id="map">
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <ViewerPage />
            </main>
        </div>
    )
}


export default CesiumMap;