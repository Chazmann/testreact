import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algo from './algo'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( //solo permite insertar un elemento
//permite insertar mas de un elemento
  <React.Fragment>  
    <div><Algo /></div>
    <App />
    {/* contenido Javascript */}
    </React.Fragment>
)