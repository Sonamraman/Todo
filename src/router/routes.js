import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Signin from '../pages/signin/Signin'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            {/* <Route exact path = '/forgetpassword' component = {Forgetpassword}/>
            <Route exact path = '/changepass' component = {Changepass}/> */}
            <Route exact path = '/signin' component = {Signin}/>
            <Route exact path = '/' component = {Home}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
