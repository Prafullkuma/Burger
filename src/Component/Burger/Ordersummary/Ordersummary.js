import React from 'react'
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: "capitalize" }}> {igKey}  </span>:{props.ingredients[igKey]}</li>
        });

    //igkey =salad and props.ingredient[igkey]=values (dynamically)
    return (
        <Aux>
            <h3>Your order</h3>
            <p> a Delecious burger with the following Ingredients</p>
            <ul>
                {
                    ingredientsSummary
                }
            </ul>
            <p>Continue to CheckOut</p>
            <p><strong>total Price:{props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}
export default orderSummary