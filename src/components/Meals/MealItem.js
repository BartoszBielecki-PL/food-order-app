import React from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

const MealItem = (props) => {
    return (
        <li id={props.id} >
                <div className={classes.meal}>
                <h3>{props.mealName}</h3>
                <div className={classes.description}>{props.mealDescription}</div>
                <div className={classes.price}>{props.mealPrice.toFixed(2)}$</div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem;