import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../constants';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {
                projects.map(data => (
                    <div className="homeItem">
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <Link to={data.link}>View app</Link>
                    </div>   
                ))
            }
        </div>
    )
}

export default Home;