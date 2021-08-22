const initial = {
    day: "weekday",
    time: "上午"
}

const valueOfTelecom = (state = initial, action) => {
    switch (action.type) {
        case 'ADJUSTDAY':
            return {
                ...state,
                day: action.day
            }
        case 'ADJUSTTIME':
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}

export default valueOfTelecom;