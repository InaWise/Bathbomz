import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {  Menu } from "semantic-ui-react"
<ul className="flex-row">
  <li className="mx-1">
    <Link to="/orderHistory">
      Order History
  </Link>
  </li>
  <li className="mx-1">
    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
    <a href="/" onClick={() => Auth.logout()}>
      Logout
  </a>
  </li>
</ul>
function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => Auth.logout()}

          />
          <Link to="/orderHistory"><Menu.Item
            name='Order Details'
          />
          </Link>


        </Menu.Menu>
      );
    } else {
      return (
        <>
          <Link to="/signup"><Menu.Item
            name='Signup' /></Link>

          <Link to="/login"> <Menu.Item
            name='Login'
          /></Link>
        </>

      );
    }
  }

  return (
    <div>
      {/* <header className="flex-row px-1">
      <h1>
        <Link to="">
          <span role="img" aria-label="shopping bag">🧼</span>
          Bath-Bombs-For-Man
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
  </header>*/}


      <Menu pointing inverted>
        <Link to="/"><Menu.Item
          name='Home'

        /></Link>
        {showNavigation()}




      </Menu>


    </div >

  );
}

export default Nav;
