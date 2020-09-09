import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './components/App/app.jsx'
import {BrowserRouter} from 'react-router-dom'
const init = ()=>{
    ReactDOM.render(
        <BrowserRouter>
        <App />
        </BrowserRouter>,
        document.querySelector(`#root`)
    )
}
init()