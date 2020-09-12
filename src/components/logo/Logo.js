import React from 'react';
import {NavLink} from 'react-router-dom'
import './logo.scss';
import logo from '../../image/logo1.png';

export const Logo = () =>{
    return(
        <div className='logo'>
            <NavLink to="/">
                <img src={logo} alt="ro" />
                    <span>Briliant</span>
                    <span>Animator</span>
            </NavLink>
        </div>
    )
}