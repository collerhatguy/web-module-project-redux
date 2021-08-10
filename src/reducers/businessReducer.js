
import {REMOVE_FAVORITES, ADD_FAVORITES, TOGGLE_FAVORITES} from "../actions/businessActions";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }     
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(movie => 
                    movie.id !== action.payload
                )
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default: 
            return state;
    }
}

export default businessReducer;