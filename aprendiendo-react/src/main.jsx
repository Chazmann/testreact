import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algo from './algo'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
<<<<<<< HEAD
root.render( //solo permite insertar un elemento
//permite insertar mas de un elemento
  <React.Fragment>  
    <div><Algo /><Algo /></div>
    <App />
    {/* aas */}
    
=======
root.render( /*solo permite insertar un elemento*/
  <React.Fragment> 
    //permite insertar mas de un elemento
    <div>'Hola'</div>
>>>>>>> 3a2ec034dddbeb902903bd43a62f4d4dda3ffe36
    <button>Hola</button>
  </React.Fragment>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
