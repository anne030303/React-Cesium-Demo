import { combineReducers } from 'redux'
import mapControls from './mapControls'
import isSidebarOpen from './isSidebarOpen'
import checkedLayers from './checkedLayers'
import isMeasuring from './isMeasuring'
import isPopup from './isPopup'
import isDrawingOrEditing from './isDrawingOrEditing'
import checkedThemes from './checkedThemes'
import valueOfBuildingThreshold from './valueOfBuildingThreshold'



export default combineReducers({
    mapControls,
    isSidebarOpen,
    checkedLayers,
    isMeasuring,
    isPopup,
    isDrawingOrEditing,
    checkedThemes,
    valueOfBuildingThreshold
})