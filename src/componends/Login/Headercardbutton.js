import style from './Headercardbutton.module.css';
import Carticon from '../../icons/Cardicon.js'
import { Fragment } from 'react';
const Cardtbutton=(props)=>{
    return <Fragment>
    <button className={style.button} onClick={props.onShow}> 
        <span className={style.icon}><Carticon/></span>
            <span>Your cart</span>
            <span className={style.badge}>3</span>

    </button>
    </Fragment>
};
 export default Cardtbutton;