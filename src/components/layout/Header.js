// RAFCP
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-3'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          {branding}
        </Link>{" "}
      </div>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            HOME
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact/add' className='nav-link'>
            Add
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Header.defaultProps={
//     branding: 'My app'
// }

//checking dates are correct  file
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
