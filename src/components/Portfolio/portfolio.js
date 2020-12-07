import { Link } from 'react-router-dom';
import React from "react";

import "./portfolio.css";



function Portfolio(props) {
    return (  
        <div className="card cardGrid">
            <div className="img-container">
                <h4>{props.name}</h4>
                <nav>
                    <a href={props.link} target="_blank">
                        <img src={props.image} alt={props.name} id={props.id} className="href"/>
                    </a>
                </nav>
            </div>  
        </div>
        )
}

export default Portfolio;