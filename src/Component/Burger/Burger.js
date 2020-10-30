import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BugerIngredient/BugerIngredeint'
const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
        //arr previous value and corrent value
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []) //initial value
    console.log(transformedIngredient)
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )
}
export default burger