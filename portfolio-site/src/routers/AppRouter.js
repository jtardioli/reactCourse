import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Portfolio from '../components/Portfolio'
import Project from '../components/Project'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'



const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={HomePage} exact={true} ></Route>
    <Route path="/portfolio" component={Portfolio} exact={true} ></Route>
    <Route path="/project/:id" component={Project} exact={true} ></Route>
    <Route path="/contact" component={Contact} exact={true} ></Route>
    <Route  component={NotFound} exact={true} ></Route>
    </Switch>    
    </div>
    </BrowserRouter>
)

export default AppRouter

