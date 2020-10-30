import React from 'react'
import Buildcontrol from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
//creating Array fo element Buildcontrol
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => (

    <div className={classes.Buildcontrols}>
        <p>Control price:{props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <Buildcontrol
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purshable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
)

export default buildControls