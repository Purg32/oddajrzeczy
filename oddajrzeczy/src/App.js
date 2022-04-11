import React, {Component} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

import "../src/scss/main.scss"

class App extends Component {
    render(){
        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route  path='/login' element={<Login />} />
                    <Route  path='/register' element={<Register />} />
                </Routes>
            </HashRouter>
        )
    }
}


export default App;