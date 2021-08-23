import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className="footer">
            <Link to="/">
              <i class="home-button fas fa-home fa-2x"></i>
            </Link>
            <Link to="/calendar">
                <i class="far fa-calendar-alt fa-2x"></i>
            </Link>
            <Link to="/myplants">
                <i class="fas fa-seedling fa-2x"></i>
            </Link>
            <Link to="/account">
                <i class="fas fa-user fa-2x"></i>
            </Link> 
        </div>
    )
};

export default Footer