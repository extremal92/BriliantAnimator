import React, {useContext} from 'react'
import './subscribe.scss'
import { MyContext } from '../../context/MyContext'


export const Subscribe = () =>{

    const{state, phoneHandler, emailHandler, commentHandler, subscribeWrite} = useContext(MyContext)
    return(
        <div className='subscribe'>
            <div className='container'>
                <div className='subscribeMain'>
                    <div className='subscribeTitle'>
                        <h1>Оставьте заявку</h1>
                    </div>
                    <div className='subscribeForm'>
                        
                        <div className='formInputs'>
                            <div className='formNumber'>
                                <label>Телефон</label>
                                <input type="number" onChange = {phoneHandler} value = {state.subscribe.phone}/>
                            </div>
                            
                            <div className='formEmail'>
                                <label>Email</label>
                                <input type="email"onChange = {emailHandler} value = {state.subscribe.email}/>
                            </div>
                        </div>
                        
                        <div className='formComment'>
                            <label>Коментарий</label>
                            <textarea onChange = {commentHandler} value = {state.subscribe.comment}></textarea>   
                        </div>
                        
                        <button onClick={()=>subscribeWrite(state.subscribe)}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}