const initial = {
    isMeasuring: false,
    mode: ""
}

const isMeasuring = (state = initial, action) => {
    switch (action.type) {
        case 'ACTIVEMEASURING':
            return {
                isMeasuring: true,
                mode: action.mode
            };
        case 'CLOSEMEASURING':
            return {
                isMeasuring: false,
                mode: ""
            }
        default:
            return state
    }
}

export default isMeasuring;