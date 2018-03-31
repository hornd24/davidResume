import React from 'react';
import ReactDOM from 'react-dom';
import App from './Views/App.js';
import registerServiceWorker from './registerServiceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <ParallaxProvider><App /> </ParallaxProvider>, document.getElementById('root'));
registerServiceWorker();
