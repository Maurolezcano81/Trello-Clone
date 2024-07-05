
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

      <Route path='signup' element={ <SignUp />}>

      </Route>

      </Routes>
    
    </BrowserRouter>

  )
}

export default App
