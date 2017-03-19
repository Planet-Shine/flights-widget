
import arrayPrototypeFind from 'array.prototype.find';
arrayPrototypeFind.shim(); // Ставим полифил find для ie9.
import 'es6-promise/auto'; // Ставим полифил Promise для ie9.

import React from 'react';
import ReactDOM from 'react-dom';
import produceStore from 'store';
import { Provider } from 'react-redux';
import { FlightListWidget } from 'containers';
import './styles/base.less';


const store = produceStore();
function renderApp() {
    ReactDOM.render(
        <Provider store={store} key="provider">
            <FlightListWidget />
        </Provider>,
        document.getElementById('mount-point')
    );
}
renderApp();