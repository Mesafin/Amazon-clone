import React, { useEffect } from "react";
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout'
import Login from './LogIn/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";


function App() {
   const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the  user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
       
         <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;

