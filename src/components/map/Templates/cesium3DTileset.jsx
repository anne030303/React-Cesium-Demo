import React, { useContext } from "react";
import { Cesium3DTileset, CameraFlyTo } from "resium";
import ViewerContext from "../ViewerContext";
import { Cartesian3, VerticalOrigin } from 'cesium'


function Cesium3DTilesetTemplate(props) {
    const { viewer } = useContext(ViewerContext);
    const handleReady = tileset => {
        // tileset.style = new Cesium3DTileStyle({
        //     defines: {
        //         material: "${feature['建物樓層數']}",
        //     },
        //     color: {
        //         conditions: [
        //             ["${material} === 1", "color('green')"],
        //             // ['${elementId} === 266547173',"color('red')"],
        //             // ['${elementId} === 820382924',"color('green')"],
        //             [true, 'color("red")']]
        //     }
        // })

        if (viewer) {
            console.log(viewer.camera);
            viewer.zoomTo(tileset);
        }
    };
    return <Cesium3DTileset
        key={props.id}
        id={props.id}
        name={props.modelname}
        url={props.url}
        onReady={handleReady}
    // onClick={(evt, tileset) => handleClick(evt, tileset, modelDetail.modelname, modelDetail.id)}
    />
}

export default Cesium3DTilesetTemplate;