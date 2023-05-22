import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algo from './algo'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( //solo permite insertar un elemento
//permite insertar mas de un elemento
  <React.Fragment>  
    <div><Algo /><Algo /></div>
    <App />
    {/* aas */}
    
    <button>Hola</button>
  </React.Fragment>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
