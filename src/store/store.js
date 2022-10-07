import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from '../reducers/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({countReducer});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;