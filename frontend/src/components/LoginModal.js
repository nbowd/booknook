import React, { useState } from 'react';
import Button from './Button';
import './Modal.css';
import axios from 'axios';
import loginService from '../services/login';
import Notification from './Notification';

function LoginModal({ open, close, props }) {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    modalType,
    setToken,
    setUser,
  } = props;
  const [passCheck, setPassCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  if (!open) return null;

  const displayMessage = (message, length = 5000) => {
    setErrorMessage(`${message}`);
    setTimeout(() => {
      setErrorMessage(null);
    }, length);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== passCheck) {
      displayMessage('Passwords do not match');
    } else {
      try {
        await axios.post('/api/users', { email, username, password });
        await handleLogin();
      } catch (error) {
        displayMessage(error.response.data.error);
      }
    }
  };

  const handleLogin = async (event = null) => {
    event ? event.preventDefault() : (event = null);
    try {
      const credentials = await loginService.login({
        email,
        password,
      });

      window.localStorage.setItem(
        'loggedBookappUser',
        JSON.stringify(credentials)
      );
      setToken(credentials);
      setUser(credentials);
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (exception) {
      displayMessage('Invalid Login Credentials');
    }
    console.log('logging in to', email);
  };

  const modalClose = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setPassCheck('');
    setErrorMessage(null);
    close();
  };
  return (
    <>
      <div className="overlay" onClick={modalClose}></div>

      <div className="modal" id="login-modal">
        <div className="login-info">
          <div className="heading" id="login-heading">
            {modalType}
          </div>
          <div className="login-form">
            <form
              onSubmit={modalType === 'Login' ? handleLogin : handleRegister}
            >
              <div>
                Email
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              {modalType === 'Register' ? (
                <div>
                  Username
                  <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </div>
              ) : null}
              <div>
                Password
                <input
                  type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              {modalType === 'Register' ? (
                <div>
                  Re-enter Password
                  <input
                    type="password"
                    value={passCheck}
                    name="Password"
                    onChange={({ target }) => setPassCheck(target.value)}
                  />
                </div>
              ) : null}
              <div className="errorMsg">
                <Notification
                  message={errorMessage}
                  style={{ color: 'green' }}
                />
              </div>
              <button id="login-modal-btn" className="login-btns" type="submit">
                {modalType}
              </button>
            </form>
          </div>
        </div>
        <Button
          className="close-modal"
          id="login-close"
          onClick={close}
          message="&times;"
        />
      </div>
    </>
  );
}

export default LoginModal;
