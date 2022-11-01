import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"
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
   
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  </div>
);




 }

export default App;
