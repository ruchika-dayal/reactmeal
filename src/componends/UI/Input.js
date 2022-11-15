
import style from './Input.module.css';

const Input=(props)=>{
    return <div className={style.input}>
        <label forhtml={props.input.id}>{props.label}</label>
        <input id={props.input}></input>
    </div>
};
export default Input;
