// 開關Sidebar
export function handleSidebar(open) {
    return {
        type: 'HANDLE_SIDEBAR_BOOLEAN',
        isSidebarOpen: open
    }
}
export function handleSidebarTab(tabnum) {
    return {
        type: 'HANDLE_SIDEBAR_TABNUM',
        selectedTab: tabnum
    }
}
// 圖層勾選
export function handleCheckedTheme(id) {
    return {
        type: 'CHECKEDTHEME',
        id: id
    }
}
export function handleCheckedLayer(id) {
    return {
        type: 'CHECKEDLAYER',
        id: id
    }
}
// 地圖顯示控制
export function handleMapControl(property, content) {
    return {
        type: 'MAPCONTROL',
        property: property,
        content: content
    }
}
// 量測功能開關
export function activeMeasure(mode) {
    return {
        type: 'ACTIVEMEASURING',
        mode: mode
    }
}
export function closeMeasure() {
    return {
        type: 'CLOSEMEASURING'
    }
}

export function toggleBuildingSliderChange(value) {
    return {
        type: 'ADJUSTTHRESHOLD',
        value: value
    }
}