import React, {useContext} from 'react'
import './programs.scss'
import { MyContext } from '../../context/MyContext'

export const Programs = () =>{

    const {state} = useContext(MyContext)

    return(
        <div className='programs'>
            <h1>Наши Программы</h1>

            <div className='programsMain'>
                {
                    Object.keys((state.programs)).map((item, i)=>{
                        return(
                            <div className='programsItem' key={item}>
                                <div className='itemImage'>
                                    <img src={state.programs[item].image} alt={item} />
                                </div>
                                <div className='itemInfo'>
                                    <div className='infoTitle'>
                                        <h1>{state.programs[item].name}</h1>
                                    </div>
                                    <div className='infoDesc'>
                                        {state.programs[item].desc}
                                    </div>
                                    {
                                        <div className='infoDesc' dangerouslySetInnerHTML={{__html: state.programs[item].desc}} />
                                    }
                                    <div className='infoPrice'>
                                        <span>Цена: </span> <span> {state.programs[item].price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
