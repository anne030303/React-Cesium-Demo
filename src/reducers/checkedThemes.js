import config from '../components/sidebar/Themes/config.json'

const themesInitial = config.ThemesItems

const checkedTheme = (state = {}, action) => {
    switch (action.type) {
        case 'CHECKEDTHEME':
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


const checkedThemes = (state = themesInitial, action) => {
    switch (action.type) {
        case 'CHECKEDTHEME':
            return state.map(item =>
                checkedTheme(item, action)
            );
        default:
            return state
    }
}

export default checkedThemes;