import React, { Component } from 'react'
import { Link,Router } from 'react-router-dom'

export class Header extends Component {
   
    render() {
        return (
          <Router>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Newsop<span style={{color: "red"}}>e</span>dia</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to ="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to ="/business" className="nav-link">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ="/entertainment" className="nav-link" >Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/health" className="nav-link"> Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/science" className="nav-link" >Science</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
     </Router>
        )
    }
}

export default Header
