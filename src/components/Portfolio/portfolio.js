import { Link } from 'react-router-dom';

import "./portfolio.css";



function Portfolio(props) {
    return (  
        <div className="card cardGrid">
            <div className="img-container">
                <h4>{props.name}</h4>
                <nav>
                    <a href={props.link} target="_blank">
                        <img alt={props.name} src={window.location.origin + `/Images/${props.image}`} className="href"/>
                    </a>
                </nav>
            </div>  
        </div>
        )
}

export default Portfolio;