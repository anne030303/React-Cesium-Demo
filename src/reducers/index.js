import { combineReducers } from 'redux'
import mapControls from './mapControls'
import isSidebarOpen from './isSidebarOpen'
import checkedLayer from './checkedLayer'
import isMeasuring from './isMeasuring'
import isPopup from './isPopup'
import isDrawingOrEditing from './isDrawingOrEditing'
import checkedThemes from './checkedThemes'



export default combineReducers({
    mapControls,
    isSidebarOpen,
    checkedLayer,
    isMeasuring,
    isPopup,
    isDrawingOrEditing,
    checkedThemes
})