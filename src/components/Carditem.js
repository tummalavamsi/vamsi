import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css';
import './UniButton.css'
function Carditem(props) {
    return (
        <>
          <li className='cards__item'>
              <Link className='cards__item__link' to={props.path}>
               <figure className='cards__item__pic-wrap' data-category={props.label}>
                   <img src={props.src} alt='vedini image' className='cards__item__img'/>

                   </figure>
                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>
                      {props.text}
                      </h5>
                      <h6 className='cards__item__desc'>{props.desc} </h6>
                      
                      <Link to={props.path} className='card-btn'>
           
                    
            <button
            className='crdbtn'
           
            >
                {props.btntext}
            </button>
       
        </Link>
                 </div>
                  </Link></li>  
        </>
        
    );

}

export default Carditem
