import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
import { AuthContext } from '../AuthContext/AuthContext';
import { useContext } from 'react';

const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="header">
      <div className="buttons">
        {auth.isLoggedIn ? (
          <>
            <NavLink to="/profile">
              <h2>My Profile</h2>
            </NavLink>
            <NavLink to="/settings">
              <h2>Settings</h2>
            </NavLink>
            <NavLink to="/dashboard">
              <h2>Dashboard</h2>
            </NavLink>
            <NavLink to="/help">
              <h2>Help</h2>
            </NavLink>
            <button onClick={auth.logout}>Log out</button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <div className="Login">
                <button>Log in</button>
              </div>
            </NavLink>
            <NavLink to="/signup">
              <div className="SignUp">
                <button>Sign up</button>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
