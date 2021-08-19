
const currentUser = (state = null, action) => {
    switch (action.type) {
        case 'AUTH':
            if (action.authUser) {
                return action.authUser.email
            } else {
                return null
            }
        default:
            return state
    }
}

export default currentUser;