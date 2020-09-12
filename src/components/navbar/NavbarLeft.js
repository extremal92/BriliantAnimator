import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import './navbar.scss'

export const NavbarLeft = () => {
    const [ t, i18n ] = useTranslation();
    return(
        <nav>
            <ul>
                <li><Link to="/shares">{t('test_message')}</Link></li>
                <li><NavLink to="/shares">Акции</NavLink></li>
                <li><NavLink to="/gallery">Наши работы</NavLink></li>
            </ul>
        </nav>
    )
}
