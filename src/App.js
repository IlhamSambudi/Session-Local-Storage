import './App.css';
import React from 'react'
import Utama from './components/utama'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (

      <div>
        {/* START NAVBAR */}
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">MyBOOK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link className="nav-link text-uppercase" to="/">Home</Link>
                <Link className="nav-link text-uppercase" to="/karya">Work</Link>
                <Link className="nav-link text-uppercase" to="/gallery">Gallery</Link>
                <Link className="nav-link text-uppercase" to="/cart">Cart</Link>
                <Link className="nav-link text-uppercase" to="/tentangsaya">About Us</Link>
                <Link className="nav-link text-uppercase" to="/kontak">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* END NAVBAR */}

        {/* START BODY */}
        <p><Utama/></p>
        {/* END BODY */}
      </div>
    );
  }
}

