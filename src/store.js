
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';

const produceStore = () => {
    const preloadedState = {};
    const middleware = [thunk];
    const finalCreateStore = applyMiddleware(...middleware)(createStore);
    return finalCreateStore(reducers, preloadedState);
};

export default produceStore;