import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            Burguer Builder
        </NavigationItem>
        <NavigationItem link="/" >
            CheckOut
        </NavigationItem>
    </ul>
)
export default NavigationItems