import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import home from '../assets/static/home.png';
import search from '../assets/static/search.png';
import favorite from '../assets/static/favorite.png';
import profile from '../assets/static/user.png';
import logo from '../assets/static/Icon.png';

const Header = () => (
  <header className='header'>
    <div className='title'>
      <h1>
        <img className='hero-image' src={logo} alt='Catstagram logo' />
        Catstagram
      </h1>
    </div>
    <section>
      <nav className='menu' aria-label='main-navigation'>
        <ul>
          <li className='menu-active'>
            <Link className='nav-item' to='/'>
              <figure>
                <img src={home} alt='Home icon' />
              </figure>
            </Link>
          </li>
          <li>
            <Link className='nav-item' to='/search'>
              <figure>
                <img src={search} alt='Search icon' />
              </figure>
            </Link>
          </li>
          <li>
            <Link className='nav-item' to='/favorites'>
              <figure>
                <img src={favorite} alt='Search icon' />
              </figure>
            </Link>
          </li>
          <li>
            <Link className='nav-item' to='/profile'>
              <figure>
                <img src={profile} alt='User icon' />
              </figure>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Header;
