import React from 'react';
// import 'bootstrap/dist/css/bootstrap/Container'
import Login from './LoginForm';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import NavBar from './NavaBar';


function App() {
  return (
    <div className="App">
        <Login/>
        <SignUpForm/>
        <Footer/>
        <NavBar/>


    </div>
  );
}

export default App;
