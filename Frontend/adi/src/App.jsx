// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Register from './components/Register'
import Delete from './components/Delete'
import Update from './components/Update'
// import './App.css'
function App() {
  

  return (
  //   <div> 
  //     <h1>CRUD FUNCTION</h1>
  //     <View/>
  //     <Register/>
  //     <Delete/>
  //     <Update/>
  //   </div>
  // )\
 <div>
  <h1>CRUD FUNCTION APP</h1>
  <Register/><br/>
  <View/>
  <Delete/>
   <Update/>
 </div>
  )
}

export default App
