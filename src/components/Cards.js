import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>check these destinies </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='C:\Users\tumma\Downloads\Telegram Desktop\sdp\public\images\Screenshot 2021-10-26 004134.png'
                    text='Zodiac Signs'
                    label=''
                    path='/services'
                    className='card1'
                    />
                    <Carditem
                    src=''
                    text='explopre'
                    label='Adventure'
                    path='/services'
                    className='card2'
                    />
                    </ul>
                     
                </div>
           
            </div>
            
        </div>
    );
}

export default Cards; 
