
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Navbar =(props)=> {
   let {category,country } = props;
  

  
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News-Monkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link onClick = {()=>category("general")} className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("general")} className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("business")} className="nav-link" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("entertainment")} className="nav-link" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("general")} className="nav-link" to="/general">general</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("health")} className="nav-link" to="/health">health </Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("science")} className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("sports")} className="nav-link" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link onClick = {()=>category("technology")} className="nav-link" to="/technology">technology</Link>
                </li>






              </ul>

            </div>
            
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/in" onClick={()=>country("in")}>India</Link></li>
                  <li><Link className="dropdown-item" to="/us" onClick={()=>country("us")}>US</Link></li>
                  <li><Link className="dropdown-item" to="/ae" onClick={()=>country("ae")}>ae</Link></li>
                  <li><Link className="dropdown-item" to="/ar" onClick={()=>country("ar")}>ar</Link></li>
                  <li><Link className="dropdown-item" to="/at" onClick={()=>country("at")}>at </Link></li>
                  <li><Link className="dropdown-item" to="/au" onClick={()=>country("au")}>au </Link></li>
                  <li><Link className="dropdown-item" to="/be" onClick={()=>country("be")}>be</Link></li>
                  <li><Link className="dropdown-item" to="/bg" onClick={()=>country("bg")}>bg</Link></li>
                  <li><Link className="dropdown-item" to="/br" onClick={()=>country("br")}>br</Link></li>
                  <li><Link className="dropdown-item" to="/ca" onClick={()=>country("ca")}>ca</Link></li>
                  <li><Link className="dropdown-item" to="/ch" onClick={()=>country("ch")}>ch</Link></li>
                  <li><Link className="dropdown-item" to="/cn" onClick={()=>country("cn")}>cn</Link></li>
                  <li><Link className="dropdown-item" to="/co" onClick={()=>country("co")}>co</Link></li>
                  <li><Link className="dropdown-item" to="/cu" onClick={()=>country("cu")}>cu</Link></li>
                  <li><Link className="dropdown-item" to="/cz" onClick={()=>country("cz")}>cz</Link></li>
                  <li><Link className="dropdown-item" to="/de" onClick={()=>country("de")}>de</Link></li>
                  <li><Link className="dropdown-item" to="/eg" onClick={()=>country("eg")}>eg</Link></li>
                 
                  
                </ul>
              </div>
            
          </div>
        </nav>
      </div>

    )
  
}

export default Navbar