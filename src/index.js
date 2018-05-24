import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
