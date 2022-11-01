import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link} from "react-router-dom"
import {ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import "firebase/app"
import "firebase/auth"
import Home from './pages/Home';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';



 const App = () => {

const [user, setUser] = useContext(null);


return (
  <div className="App">
    <ToastContainer />

    
      {/* <UserContext.Provider value={{ user, setUser }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      {/* </UserContext.Provider> */}
  
  </div>
);




 }

export default App;
