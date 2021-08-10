import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import businessReducer from './businessReducer';

const reducer = combineReducers({
    movie: movieReducer, 
    business: businessReducer,
}); 

export default reducer; 