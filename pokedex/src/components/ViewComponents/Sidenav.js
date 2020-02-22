import React from "react";
import "../../style/scss/Sidenav.scss";
import { NavLink } from "react-router-dom";

class Sidenav extends React.Component {

    render() {

return (
  <nav>
    <ul id="slide-out" className="sidenav sidenav-fixed">
      <li>
        <div className="user-view">
          <img className="logoImg" src="./img/logo1.jpg" />
        </div>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader" href="#!">
          Pokedex
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>  
        <NavLink className="waves-effect" to='/pokedex' activeClassName="active">
        <i className="material-icons">apps</i>All pokemons
       </NavLink>
      </li>
      <li>
        <NavLink className="waves-effect" to='/my-pokedex' activeClassName="active">
          <i className="material-icons">favorite</i>My pokemons
       </NavLink>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader" href="#!">
          Pokemons Game
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          <i className="material-icons">local_library</i>
          Quiz
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      className="sidenav-trigger show-on-large"
    >
      <i className="material-icons">menu</i>
    </a>
  </nav>
); }
}

export default Sidenav;