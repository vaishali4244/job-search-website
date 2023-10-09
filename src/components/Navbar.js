import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  const [signed, setSigned] = useState(true)
  const [regis, setRegis] = useState(true)

  const signClick = () => {
    setRegis(false)
    setSigned(true)
  }
  const regisClick = event => {
    // 👇️ toggle shown state
    setSigned(false);
    setRegis(true)
  }

  return (<>
    <nav className="content-nav">

      <div className="navbar-nav">
        {regis && <p className="nav-item" onClick={signClick} style={{ fontWeight: "bold" }} ><Link  to="/">Signin</Link></p>}
      </div>
      <div className='navbar-nav'>
        {signed && <p className="nav-item" onClick={regisClick} style={{ fontWeight: "bold" }} > <Link  to="/register">Register</Link></p>}

      </div>
    </nav>
  </>
  )
}

export default NavBar;