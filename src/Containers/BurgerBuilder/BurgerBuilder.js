import React, { Component } from 'react'
import Aux from '../../HOC/Aux'
import Burger from '../../Component/Burger/Burger'
import BuildControls from '../../Component/Burger/BuildControls/BuildControls'
import Modal from '../../Component/UI/Modal/Model'
import OderSummary from '../../Component/Burger/Ordersummary/Ordersummary'
const INGREDIENT_PRICE = {
    salad: 15,
    bacon: 20,
    cheese: 30,
    meat: 75
}
class BurgerBuilder extends Component {
    // constroctor(props){
    //     super(props)
    // }
 
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 10,
        purshable: false,
        purchasing: false
    }
    updatePurchaseState = (ingredients) => {
        // const ingredients={
        //     ...this.state.ingredients
        // } //order button
        const sum = Object.keys(ingredients)
            .map(igKey => {
                //returning values from
                return ingredients[igKey]
            }).reduce((sum, el) => {
                //returning a single number
                return sum + el
            }, 0)
        this.setState({ purshable: sum > 0 })
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)  //order button
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)  //order button
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })

    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        alert("you Continue")
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (

            <Aux>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OderSummary
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseCountineHandler}
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} />
                </Modal>
                {/* Burger*/}
                <Burger ingredients={this.state.ingredients} />
                {/*<div>Build Controler</div>*/}
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disableInfo}
                    ordered={this.purchaseHandler}
                    purshable={this.state.purshable}
                    price={this.state.totalPrice} />
            </Aux>
        )
    }
}
export default BurgerBuilder

