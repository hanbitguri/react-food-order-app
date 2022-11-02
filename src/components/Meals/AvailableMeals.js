import React from 'react'
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card'

function AvailableMeals() {

const mealList = DUMMY_MEALS.map(meal => 
    <MealItem
    id={meal.id} 
    key={meal.id} 
    name={meal.name} 
    desc={meal.description} 
    price={meal.price}></MealItem>);

return (
    <section className={styles.meals}>
        <Card>
        <ul>
           {mealList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals