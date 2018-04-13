import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { createStore } from '../../../AppData/Local/Microsoft/TypeScript/2.7/node_modules/redux';
import reducer from './store/reducers'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
