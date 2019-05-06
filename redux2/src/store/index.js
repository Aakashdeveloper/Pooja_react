import { createStore, applyMiddleware} from 'redux';
import promiseMiddleWare from 'redux-promise';

import reducers from '../reducer';

let store = createStore(reducers,applyMiddleware(promiseMiddleWare))

export default store;
