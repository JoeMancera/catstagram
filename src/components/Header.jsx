import React from 'react';
import '../assets/styles/components/Header.css';
import home from '../assets/static/home.png';
import search from '../assets/static/search.png';
import favorite from '../assets/static/favorite.png';
import profile from '../assets/static/user.png';

const Header = () => (
  <header className='header'>
    <section>
      <nav className='menu' aria-label='main-navigation'>
        <ul>
          <li className='menu-active'>
            <figure>
              <img src={home} alt='Home icon' />
            </figure>
          </li>
          <li>
            <a href='#Search'>
              <figure>
                <img src={search} alt='Search icon' />
              </figure>
            </a>
          </li>
          <li>
            <a href='#Favorites'>
              <figure>
                <img src={favorite} alt='Search icon' />
              </figure>
            </a>
          </li>
          <li>
            <a href='#Profiles'>
              <figure>
                <img src={profile} alt='User icon' />
              </figure>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Header;
