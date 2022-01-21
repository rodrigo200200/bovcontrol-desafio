import {createStore} from 'redux';
import reducers from './reducers';
import asyncStorage from './asyncStorage';

const storeReducer = createStore(reducers.rootReducer);
const store = {
  storeReducer,
  asyncStorage,
};

export default store;
