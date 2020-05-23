import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PromotionCard from '../../../componests/Promotion/Card/Card';
import {Link} from 'react-router-dom';
import './style.css'

const PromotionSearch =() =>{
    const [promotion , setPromotion]=useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/promotions?_embed=comments').then((Response) => {
            setPromotion(Response.data)
        })

    }, [])
    return(
        <div className='promotion-search'>
            <header className='promotion-search_header'>
            <h1>Promo Show</h1>
                <Link to="/create">Nova promoção</Link>
            </header>
            <input className='promotion-search__input' type="search" placeholder='buscar'/>
           {promotion.map((promotion) => (
                <PromotionCard promotion={promotion} />

            ))}

        </div>
    );
};
export default PromotionSearch;