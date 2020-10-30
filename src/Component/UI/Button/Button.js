import React from 'react';
import classes from './button.module.css'
const button = (props) => {
    return (
        <div>
            <button
                className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.clicked}
            >
                {props.children}

            </button>
        </div >

    )
}
export default button

//className={classes.Button, classes[props.btnType].join(' ')}
    //Array of button     