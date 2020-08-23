import React from 'react';

const NavMenu = () => {

return (
<nav className="navbar navbar-expand navbar-dark bg-dark mb-2 ">
  <a className="navbar-brand" href="#">MMR</a>
  <div className="collapse navbar-collapse" id="navbarsExample02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default NavMenu;
