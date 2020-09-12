import React, {useContext} from 'react'
import './promo.scss'
import { MyContext } from '../../context/MyContext'

export const Promo = () => {

    const {state} = useContext(MyContext)
    
    return(
        <div className='promo'>
            <h1>Наши Персонажи</h1>
            {
                Object.keys(state.animators).map((item, i)=>{
                    return(
                        <div className='promoItem' key={item}>
                            <div className='itemImage'>
                                <img src={state.animators[item].image} alt={item} />
                            </div>
                            <div className='itemTitle'>
                                <span>{state.animators[item].name}</span>
                            </div>
                            <div className='itemDescription'>
                                <span>{state.animators[item].desc}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}