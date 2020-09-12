import React, {Fragment} from 'react';
import './layout.scss';
import {Route, Switch} from 'react-router-dom'


import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Footer } from '../footer/Footer';
import { Shares } from '../../pages/shares/Shares';
import { Gallery } from '../../pages/gallery/Gallery';
import { Info } from '../../pages/info/Info';
import { Toys } from '../../pages/toys/Toys';


const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            <div className='content'>
                <div className='routes'>
                    <Switch>
                        <Route path='/' exact component = {Home}/>
                        <Route path='/shares' render = {()=><Shares/>}/>
                        <Route path='/gallery' render = {()=><Gallery/>}/>
                        <Route path='/info' render = {()=><Info/>}/>
                        <Route path='/toys' render = {()=><Toys/>}/>
                    </Switch>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default AddClass(Layout, 'layout')
