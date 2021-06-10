import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';



function Welcome() {
    return (
        <div>
            <h1> Welcome</h1>
            <li > <Link to={'/home'} className="nav_link" style={{ color: "red", fontSize: "large" }}> START  </Link></li>
            
        </div>
    )
}

export default Welcome
