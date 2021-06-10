import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Show from '../contents/Show';
import Login from '../Signup/Login';


import './style.css';

export const Navbar = () => {
    const [search, setsearch] = useState('');
    const enterName = (e) => {
        setsearch(e.target.value)
    }

    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#CED3DC" }}>
                <div className="container-fluid">
                    
                    <li> <Link to={'/home'} className="nav_link" style={{ color: "black"}}> Show Time  </Link></li>
                    <input className="form-control me-2" type="search" placeholder="Movies, Trailer, Family Show, Search here..." aria-label="Search" onChange={enterName}/>
                    <li> <Link to={'/login'} className="nav_signup"> Signup </Link></li>
                    <li> <Link to={'/upcomming'} className="nav_signup"> Comming Soon </Link></li>
                    
                </div>
               
            </div>
            <div>
                
            </div>
            <Show name={search} />
        </>
    )
}

export default Navbar;