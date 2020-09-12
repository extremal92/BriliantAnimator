import React from 'react';
import './header.scss';
import { NavbarLeft } from '../navbar/NavbarLeft';
import { Logo } from '../logo/Logo';
import { Language } from '../language/Language';
import { NavbarRight } from '../navbar/NavbarRight';
import { Contacts } from '../contacts/Contacts';


export const Header = () => {
    return(
        <div className='header'>
            <div className='container'>
                <div className='headerWrap'>
                    <NavbarLeft />
                    <Logo />
                    <NavbarRight />
                </div>
            </div>

            <div className='headerBottom'>
                <div className='container'>
                    <div className='bottomMain'>
                        <div className='headerContacts'>
                            <Contacts />
                        </div>
                        <Language />
                    </div>
                </div>
            </div>
        </div>
    )
}