import React, { useContext, useRef , useState} from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context';

function MealItemForm(props) {
  const [amountIsValid,setAmountIsValid] = useState(true);
  const amountInputRef=useRef();
  
  function submitHandler(e){
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return
    }
    props.onAddToCartAmount(enteredAmountNumber) // 수량만 가져오려고 ctx안쓴거 
    
  }

  return (
    <form action="" className={styles.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label='amount' 
        input={{
            id : 'amount',
            type : 'number',
            min : '1',
            max : '5',
            step : '1',
            defaultValue : '1'
            
        }}/>
        <button>Add</button>
        {
          !amountIsValid && <p>please check a vaild amount(1-5).</p>
        }
    </form>
  )
}

export default MealItemForm