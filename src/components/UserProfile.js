import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  // console.log(isLoading, isAuthenticated)

  return (
    <Wrapper>
      {isAuthenticated && !isLoading &&
        <div className='container'>
          <h3>Hey!!!! {user.name} </h3>
          <br />
          <br />
          <img src={user.picture} alt={user.name} />
          <div className='container'>
            <input type='text' placeholder='New password'></input>
            <br />
            <br />
            <NavLink to='/' className="navbar-link">
              <Button>Change Your Password</Button>
            </NavLink>
            <br />
            <br />
            <NavLink to='/' className="navbar-link">
              <Button>Go back to Home</Button>
            </NavLink>
          </div>
        </div>}
      {!isAuthenticated && !isLoading && alert("Please Login first !!!!!")}
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