import {createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TodoReducers } from './reducers/TodoReducers';

// const reducer = combineReducers({
//     // ini adalah reducer yang akan digunakan
//     Todo: TodoReducers
// });

// const initialState = {};

// thunk middleware digunakan untuk mengakses action creator yang ada di dalam file actions/TodoActions.jsx
const middleware = [thunk];

const store = createStore(
    TodoReducers,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;