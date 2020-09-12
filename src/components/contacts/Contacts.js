import React from 'react'
import './contacts.scss'


export const Contacts = () =>{
    return(
        <>
            <div className='contactLink'>
                <a href="https://www.facebook.com/animator.briliant" target='_blank'>
                    <i className='fab fa-facebook' aria-hidden="true"/>
                    <span> animator.briliant</span>
                </a>
            </div>
            <div className='contactLink'>
                <a href="https://www.instagram.com/briliant_animator/?hl=ru" target='_blank'>
                    <i className='fab fa-instagram' aria-hidden="true"/>
                    <span> briliant_animator</span>
                </a>
            </div>
            <div className='contactLink'>
                <a href="mailto:briliant1501@gmail.com">
                    <i className='fas fa-envelope' aria-hidden="true"/>
                    <span> briliant1501@gmail.com</span>
                </a>
            </div>
            <div className='contactLink'>
                <a href="tel:+37376079013">
                    <i className='fas fa-phone' aria-hidden="true"/>
                    <span> +373 076-079-013</span>
                </a>
            </div>
        </>
)
}