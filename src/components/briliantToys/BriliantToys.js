import React, {useContext, Fragment} from 'react'
import '../../pages/toys/toys.scss'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import { MyContext } from '../../context/MyContext'

export const BriliantToys = () =>{

    const {state} = useContext(MyContext)
    return(
        <Fragment>
            {
                Object.keys((state.toys.briliant)).map((item, i)=>{
                    return(
                        <div className='toysItem' key={item}>
                            <div className='itemImage'>
                                <ReactFancyBox thumbnail={state.toys.briliant[item].image} image={state.toys.briliant[item].image} key={item}/>
                            </div>
                            <div className='itemTitle'>
                                <h3>{state.toys.briliant[item].name}</h3>
                            </div>
                            <div className='itemDesc'>
                                {state.toys.briliant[item].desc}
                            </div>
                            <div className='itemPrice'>
                                <span>Цена: </span><span> {state.toys.briliant[item].price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>

    )
}