import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const UserProfile = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>Your User Profile</h2>
        <div>
          <input type='text' placeholder='New password'></input>
          <br />
          <br />
          <NavLink to='/'>
            <Button>Change Your Password</Button>
          </NavLink>
          <br />
          <br />
          <NavLink to='/'>
            <Button>Go back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
      padding-bottom: 5rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;
export default UserProfile;