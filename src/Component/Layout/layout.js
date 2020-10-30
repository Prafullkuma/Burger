import React, { Component } from 'react'
import Aux from '../../HOC/Aux'
import classes from '../Layout/layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerColosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerTogggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState }
        })

    }
    render() {
        return (
            <Aux>
                <Toolbar drawerTogggleClicked={this.sideDrawerTogggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerColosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout