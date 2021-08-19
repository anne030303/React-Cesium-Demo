const initial = {
    isSign: false,
    type: ''
}


const isSign = (state = initial, action) => {
    switch (action.type) {
        case 'ISSIGNIN':
            return {
                isSign: true,
                type: action.type
            }
        case 'ISSIGNUP':
            return {
                isSign: true,
                type: action.type
            }
        case 'CLOSESIGN':
            return {
                ...state,
                isSign: false,
            }
        default:
            return state
    }
}


export default isSign;