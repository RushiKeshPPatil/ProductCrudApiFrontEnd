import React from 'react';
import { Link, Outlet} from 'react-router-dom';

function Header() {
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link to="/" className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/update" className='nav-link active'>Update</Link>
        </li>
        <li className="nav-item">
          <Link to="/save" className='nav-link active'>AddProduct</Link>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
      
    </header>
    <Outlet /></div>
  );
}

export default Header;
