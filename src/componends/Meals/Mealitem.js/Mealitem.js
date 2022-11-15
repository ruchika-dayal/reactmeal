import style from './Mealitem.module.css'
import MealitemForm from './MealitemForm';
const Mealitem = (props) => {
    const price = `$ ${props.price}`;

    return <li classNmae={style.meal} >
        <div className={style.box}>
    <div> 
            <h3>{props.name}</h3>
            <div className={style.descriptiion}>{props.description} </div>
            <div className={style.price}>{price}</div>
    </div>
       
        <div> <MealitemForm id={props.id}/> </div>
        </div>
       

   
       
    </li>

};
export default Mealitem;