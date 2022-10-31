import React ,{useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

function HeaderCartButton(props) {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false)
  const ctx = useContext(CartContext)
  const numberOfCartItems = 
  ctx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0);//
  const {items} = ctx;
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`; 
  
  useEffect(()=>{
    if(ctx.items.length ===0){
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false)
    },300)
    return ()=>{
      clearTimeout(timer);
    }
  },[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton