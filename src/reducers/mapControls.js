import config from '../components/config.json'

const mapInitial = config.controls;

const mapControls = (state = mapInitial, action) => {
    switch (action.type) {
        case 'MAPCONTROL':
            return {
                ...state,
                [action.property]: action.content
            }
        default:
            return state
    }
}

export default mapControls;