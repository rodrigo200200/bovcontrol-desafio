import {combineReducers} from 'redux';

import global from './global';

//combine varios reducers
const rootReducer = combineReducers({
  global: global.reducer,
});

const reducers = {
  rootReducer,
  global,
};

export default reducers;
