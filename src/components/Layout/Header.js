import React from 'react'
import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <>
    <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClickCartButton}/>
    </header>

    <div className={styles['main-image']}>
       <img src={mealsImage}/>
    </div>
    
    </>
  )
}

export default Header