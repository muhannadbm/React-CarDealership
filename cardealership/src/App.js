import logo from './logo.svg';
import './App.css';
import './css/style.css'
import './css/owl.css'
import './css/bootstrap.css'
import {
  Routes,
  NavLink ,
  Route,
  Link
} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import Home from './Components/Home'
import About from './Components/Aboutus';
import Dashboard from './Components/Admin/Dashboard';
import Cars from './Components/Cars';
import Contact from './Components/Contact';
import Notfound from './Components/404';
import Login from './Components/Login';
import "typeface-poppins";
function App() {
const [active, setActive] = useState(false)

const toggleClass = () => {
  setActive(!active)
}

  return (
    <div className="App">
<header className="header">
      <nav className="navbar navbar-expand-lg">

        <div className="container">
          <div className="logocontainer">
            <div className="imagecontainer">
          <img className='logoimage' src={process.env.PUBLIC_URL + "images/omaniamerican.png"} alt=""></img>
          </div>
          <a className="navbar-brand"><h2>Omani American <em>Dealership</em></h2></a>
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive"> */}
<div className={active ? "togglecontainer change": " togglecontainer menutoggler"} onClick={toggleClass}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
          <div className="menu-content">
            <ul className={active ? "navbar-nav ml-auto" : "navbar-nav ml-auto collapsed" }>
                <li className="nav-item">
                  
                <NavLink  className ="nav-link" to="/">Home</NavLink>
                </li> 

                <li className="nav-item"><NavLink  className ="nav-link" to="/cars">Cars</NavLink></li>

            
                <li className="nav-item"><NavLink  className ="nav-link" to="/about">About Us</NavLink></li>
                
                
                <li className="nav-item"><NavLink  className ="nav-link" to="/contact">Contact us</NavLink></li>
                <li className="nav-item"><NavLink  className ="nav-link" to="/login">Login</NavLink></li>
            </ul>
            </div>
          {/* </div> */}
        </div>
      </nav>
    </header>

    <Routes>
    <Route path = "*" element={<Notfound/>}></Route>
    <Route  path ="/about" element = {<About/>}> </Route>
    <Route  path ="/login" element = {<Login/>}> </Route>
    <Route path = "/cars" element={<Cars />}></Route>
    <Route path = "/contact" element={<Contact />}></Route>
    <Route path = "/" element={<Home />}></Route>


      
    </Routes>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <p>Copyright © 2020 Company Name - Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>

  );
}

export default App;
