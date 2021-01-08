import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../constants';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout__nav">
                <Link to="/"><img src="./Logo.png"></img></Link>
                {
                    projects.map(data => (
                        <Link to={data.link}><h5>{data.name}</h5></Link>
                    ))
                }
            </div>
            <div className="layout__body">
                {children}
            </div>
        </div>
    )
}

export default Layout;