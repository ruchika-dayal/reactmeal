import style from './Modal.module.css';
import ReactDOM from 'react-dom'
import { Fragment } from 'react';

const Backdrop=(props)=>{
    return <div className={style.backdrop}  onClick={props.hidecart}>

    </div>

};
const Overlay=(props)=>{
  return  <div className={style.modal}>
        <div className={style.content}>{props.children}</div>
    </div>
};
const dom = document.getElementById('overlay');

const Modal =(props)=>{
    return <Fragment>
   { ReactDOM.createPortal(<Backdrop  onClick={props.hidecart}/> , dom)}
   {ReactDOM.createPortal(<Overlay  >{props.children}</Overlay> ,dom)}
   
    </Fragment>
};
export default Modal;