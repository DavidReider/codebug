import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../images/img-9.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img8 from '../images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These Featured Articles</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={img9} text="Explore the wonderful uses of Technology" label="Technology" path="/blog"/>
                        <CardItem src={img2} text="Just how much does social media affect your productivity?" label="Productivity" path="/blog"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={img3} text="Phones are destroying our productivty" label="Productivity" path="/blog"/>
                        <CardItem src={img4} text="Boosting your mood with music, ultimately increasing productivity" label="Mood" path="/blog"/>
                        <CardItem src={img8} text="Bitcoin, Bitclout, and other Cryptos are taking over" label="Crypto" path="/blog"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
