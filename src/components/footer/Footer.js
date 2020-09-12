import React from 'react';
import './footer.scss';
import { Logo } from '../logo/Logo';
import { NavbarLeft } from '../navbar/NavbarLeft';
import { NavbarRight } from '../navbar/NavbarRight';
import { Contacts } from '../contacts/Contacts';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>

                <div className='footerMain'>
                    <div className='footerItem'>
                        <Logo />
                    </div>
                    <div className='footerNav footerItem'>
                        <NavbarLeft />
                        <NavbarRight />
                    </div>
                    <div className='footerContacts footerItem'>
                        <Contacts />
                    </div>
                </div>
            </div>
            <div className='footerPowered'>
                <a href="mailto:webromaromanov@gmail.com">Powered by Romanov Roman</a>
            </div>
        </div>
    )
}
