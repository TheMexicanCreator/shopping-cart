import React from 'react';
import pic from "./Images/rolex_distributor.jpg";

export default function Header(props) {
    return (
        <header className='block row center'>
            <div>
                <a href="#/">
                    <h1> ROLEX WATCHES </h1>
                </a>
            </div>
            <div className='signin'>
                <a href="#/cart"> 
                Cart {''}
                {props.countCartItems ? (
                    <button className='badge'> {props.countCartItems} </button>
                ) : (
                    ''
                )}
                </a>{''} 
                <a href="#/signin"> Sign In </a>
            </div>
            <img src={pic} alt=''/>
        </header>
    );
}