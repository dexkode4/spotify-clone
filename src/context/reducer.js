import { actionTypes } from './types'

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAcXY7dOu8elfuJZD4-iQqCNCiGr_dcT1AkoBGOA-xpANiQMt7nbu1DYhAiq8boqIg6IaQfEWEeGuu9A1pVhJikd5PltERjpwakD_LXn2I1XuydUTtjlJLTX4lPvErxYsptgxWGrSa3r3TeHMFDcS5bz0W6Q8Tjz5CQMbd6PDK4AcA6"
}

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case actionTypes.SET_PLAYLIST:
            return {
                ...state,
                playlists: action.playlists
            }
        case actionTypes.SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}