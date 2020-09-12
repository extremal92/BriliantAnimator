import React, {useContext, Fragment, useState} from 'react'
import './toys.scss'
import { MyContext } from '../../context/MyContext'
import { BriliantToys } from '../../components/briliantToys/BriliantToys'
import { EcoToys } from '../../components/ecoToys/EcoToys'

export const Toys = () =>{

    const {state} = useContext(MyContext)

    const [value, setValue] = useState('briliantToys')

    const links =[{name: 'Briliant Toys', id:'briliantToys'}, {name: 'Eco Toys', id:'ecoToys'}]

    const windowHandler =(id) =>{
        setValue(id)
    }
    return(
        <div className='container'>
            <div className='toys'>

                <Fragment>
                <div className='toysHead'>
                    <ul>
                        {links.map((item, i) =>{
                            return(
                                <li style = {{color: item.id === value ? 'red' : 'black'}}
                                    key={item.name}
                                    onClick={()=>{windowHandler(item.id)}}
                                >
                                    <h1>{item.name}</h1>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <hr/>

                </Fragment>
                <div className='toysMain'>
                    {value === 'briliantToys' ? <BriliantToys /> : <EcoToys />}
                </div>

            </div>
        </div>
    )
}
