import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import GeoJSONTemplate from '../Templates/geojson'

function Layers() {
    const layers = (useSelector(state => state.checkedLayers));

    return (
        <div>
            {layers.map((item) => (
                (item.checked) &&
                <GeoJSONTemplate
                    key={item.id}
                    id={item.id}
                    path={item.datapath}
                />
            ))}
        </div>
    )
}

export default Layers;