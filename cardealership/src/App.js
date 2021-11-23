import logo from './logo.svg';
import './App.css';
import './css/style.css'
import './css/owl.css'
import './css/bootstrap.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
<header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Car Dealer <em>Website</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </a>
                </li> 

                <li className="nav-item"><a className="nav-link" href="cars.html">Cars</a></li>

                <li className="nav-item"><a className="nav-link" href="about-us.html">About Us</a></li>
                
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <Routes>
      <Route path = "/" element {} >

      </Route>
    </Routes>
    </div>
  );
}

export default App;
