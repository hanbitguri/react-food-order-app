import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem';
function Cart(props) {
    const ctx = useContext(CartContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const hasItem = ctx.items.length>0
    function cartItemRemoveHandler(id){
        ctx.removeItem(id)
    }
    function cartItemAddHandler(item){
        ctx.addItem({...item,amount : 1})
    }
    const cartItems = <ul className={styles['cart-items']}>
        {ctx.items.map(item => 
        <CartItem 
        key={item.id}
        name={item.name} 
        amount={item.amount} 
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null ,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
        ></CartItem>)
        }
        </ul>;
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
         { hasItem && <button className={styles.button}>Order</button>}

        </div>
    </Modal>
  )
}

export default Cart