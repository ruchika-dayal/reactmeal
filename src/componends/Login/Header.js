import React ,{Fragment}from 'react';
import style from './Header.module.css';
import Cardtbutton from './Headercardbutton.js';

const Header=(props)=>{
    return <Fragment>
    <header className= {style.header}>
        <h1>   ReactMeal </h1>
        <Cardtbutton onShow={props.showcart}/>
          </header>
    <div className={style['main-image']}>

<img src='https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg'>
</img>

    </div>
</Fragment>


};

export default Header;