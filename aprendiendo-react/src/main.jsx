import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( //solo permite insertar un elemento
  <React.Fragment> // permite insertar mas de un elemento
    <div>'Hola'</div>
    <button>Hola</button>
  </React.Fragment>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
