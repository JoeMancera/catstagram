import React from 'react';
import catProfileImage from '../assets/static/prof-cat.jpg';
import '../assets/styles/components/Profile.css';

const Profile = ({ user }) => {
  return (
    <>
      <div className='head-profile' />
      <figure className='figure-profile'>
        <img className='image-profile' src={catProfileImage} alt='Cat with tie' />
      </figure>
      <section className='profile-user-name'>
        <h2>Profile</h2>
        <p>{user}</p>
      </section>
    </>
  );
};

export default Profile;
