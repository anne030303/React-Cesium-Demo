const initial = {
    isSidebarOpen: false,
    selectedTab: 0
}

const isSidebarOpen = (state = initial, action) => {
    switch (action.type) {
        case 'HANDLE_SIDEBAR_BOOLEAN':
            return {
                ...state,
                isSidebarOpen: !action.isSidebarOpen
            };
        case 'HANDLE_SIDEBAR_TABNUM':
            if (!state.isSidebarOpen) {
                return {
                    isSidebarOpen: true,
                    selectedTab: action.selectedTab
                }
            } else if (action.selectedTab === state.selectedTab) {
                return {
                    ...state,
                    selectedTab: 0
                }
            } else {
                return {
                    ...state,
                    selectedTab: action.selectedTab
                }
            }

        default:
            return state
    }
}

export default isSidebarOpen;