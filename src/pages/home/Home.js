import React, { useContext } from 'react'
import './home.scss'
import { Promo } from '../../components/promo/Promo'
import { Subscribe } from '../../components/subscribe/Subscribe'
import { Programs } from '../../components/programs/Programs'

export const Home = () =>{
    
    return(
        <>
            <div className='container'>
                <Promo />
            </div>
            <Subscribe />
            <div className='container'>
                <Programs />
            </div>
            {/* <span>шоу программы</span>  */}
        </>
    )
}