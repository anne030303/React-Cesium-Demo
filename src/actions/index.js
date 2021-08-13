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


export function closeAllTab() {
    return {
        type: 'CloseAllTab'
    }
}