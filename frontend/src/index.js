// Import react global packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router ,
         Route,
         Link
        } from 'react-router-dom'
// Import css and frameworks
import 'semantic-ui-css/semantic.min.css';

// Import Application
import App from './App'

ReactDOM.render(
    <Router>   
        <App/>
    </Router>,
document.getElementById('app'));