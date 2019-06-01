
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

const defaultRouter = require('./defaults/Route').Router;

class AppContent extends React.Component {
    render() {
        return (
            <div className="app-content">
                <Router>
                   {defaultRouter}
                </Router>
            </div>
        )
    }
}


export default AppContent;
