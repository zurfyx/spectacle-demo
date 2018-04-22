import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
