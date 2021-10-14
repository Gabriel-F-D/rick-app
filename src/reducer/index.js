const initialState = {
    characters: [],
    episodes: [],
    locations: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Get characters':
            return {
                ...state,
                characters: action.payload
            }
        case 'Get episodes':
            return {
                ...state,
                episodes: action.payload
            }
        case 'Get location':
            return {
                ...state,
                locations: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;