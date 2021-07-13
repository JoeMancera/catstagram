import React from 'react';

const Header = () => (
  <header className='header'>
    <nav className='menu' aria-label='main-navigation'>
      <ul>
        <li><a href='#Main'>Main</a></li>
        <li><a href='#Search'>Search</a></li>
        <li><a href='#Favorites'>Favorites</a></li>
        <li><a href='#Profiles'>Profile</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
