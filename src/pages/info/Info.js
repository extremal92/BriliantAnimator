import React from 'react'
import './info.scss'
import { Contacts } from '../../components/contacts/Contacts'

export const Info = () =>{
    return(
        <div className='container'>
            <div className='info'>
                <h1>Информация и контакты</h1>
                <div className='infoContacts'>
                    <h3>Вы можете с нами связаться</h3>
                    <Contacts />
                </div>
                <div className='infoPrice'>
                    <h2>Цены:</h2>
                    <ul>
                        <li>- Экспресс поздравление - от 400 лей</li>
                        <li>- Развлекательная программа - от 700 лей</li>
                        <li>- Моделированые шарики - от 150 лей</li>
                        <li>- Аквагрим простой и с блёстками и камнями - от 500 лей</li>
                        <li>- Мыльное шоу гигантских пузырей - от 1300 лей</li>
                        <li>- Яркая бумажная вечеринка - от 1600 лей</li>
                        <li>- Дискотека - от 1000 лей </li>
                        <li>- Химическое шоу - от 2000 лей</li>
                        <li>- Химические опыты - от 1500 лей</li>
                        <li>- Мастер-классы - от 700 лей, зависит от количества деток</li>
                    </ul>
                </div>
                <div className='infoBottom'>
                <div className='infoBatman'>
                    <div className="bat-cave">
                    <div className="left-wing-connector">
                        <div /> 
                        <div />
                        <div />
                    </div>
                    <div className="left-wing">
                        <div />
                        <div />
                        <div />
                        <div className="left-smoother">
                        </div>
                    </div>
                    <div className="bat-body">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="right-wing-connector">
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="right-wing">
                        <div />
                        <div />
                        <div />
                        <div className="right-smoother">                
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}