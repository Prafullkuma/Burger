import React from 'react'
import Burgerlogo from '../../assests/images/logo.png'
import classes from './logo.module.css'
const logo = (props) => {
    return (<div className={classes.Logo} style={{ height: props.height }}>
        <img src={Burgerlogo} alt="logo" />
    </div>)
}
export default logo