import Modal from '../componends/UI/Modal';
import style from './Cart.module.css';

const Card = (props) => {
    
    const cartitem = (<ul className={style['cart-items']}>{[{ id: '1', name: 'shushi', amount: '2', price: '88' }].map((item) => <li key={item.id}>{item.name}</li>)}</ul>);

    return <Modal>

        {cartitem}
        <div className={style.total}>
            <span>Total Amount</span>
            <span>327</span>
        </div>
        <div className={style.actions}>
            <button className={style["button--alt"]} onClick={props.hidecart}>Close</button>
            <button className={style.button}>Order</button>
        </div>

    </Modal>
};
export default Card;