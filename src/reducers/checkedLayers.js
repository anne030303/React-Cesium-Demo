import config from '../components/sidebar/Layers/config.json'

const layersInitial = config.LayerItems

const checkedLayer = (state = {}, action) => {
    switch (action.type) {
        case 'CHECKEDLAYER':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                checked: !state.checked
            })

        default:
            return state
    }
}


const checkedLayers = (state = layersInitial, action) => {
    switch (action.type) {
        case 'CHECKEDLAYER':
            return state.map(item =>
                checkedLayer(item, action)
            );
        default:
            return state
    }
}

export default checkedLayers;