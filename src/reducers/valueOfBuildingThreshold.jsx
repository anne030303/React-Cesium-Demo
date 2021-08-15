

const valueOfBuildingThreshold = (state = 2, action) => {
    switch (action.type) {
        case 'ADJUSTTHRESHOLD':
            return action.value
        default:
            return state
    }
}

export default valueOfBuildingThreshold;