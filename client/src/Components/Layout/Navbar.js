import React from 'react';
import PropTypes from 'prop-types';
import defaultLogo from '../../Images/city-college-logo.png';

export default function Navbar({ title, logo }) {
  return (
    <div className='navbar bg-primary'>
      <h1 className='navbar_title'>
        <img src={defaultLogo} alt={logo}/> {title}
      </h1>
    </div>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'CityDecides',
};
