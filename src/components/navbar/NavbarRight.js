import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.scss'

export const NavbarRight = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to="/info">Информация</NavLink></li>
                <li><NavLink to="/toys">Подарки</NavLink></li>
            </ul>
        </nav>
    )
}
