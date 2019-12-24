import React from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import App from './App'
render(
        <App />
    ,
    document.getElementById('root')
)


serviceWorker.unregister();