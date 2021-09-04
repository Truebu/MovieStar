import React from 'react';
import { useSelector } from 'react-redux';
import validator from 'validator';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { singInWithGoogle, startLoginEmailPassword } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui.js';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch()
  const {loading, msgError} = useSelector(state => state.ui)
    
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues;

  const formValid = () => {
    if ( !validator.isEmail( email ) ) {
      dispatch( setError('Revisa tu Email') )
      return false;
    } 
    dispatch( removeError() );
    return true;
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if ( formValid() ) {
      dispatch( startLoginEmailPassword( email, password ) )
    }
  }

  const handleGoogleLogin = () => {
    dispatch( singInWithGoogle() )
  }


  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form 
        onSubmit={ handleLogin }
        className="animate__animated animate__fadeIn animate__faster"
      >
        {
          (msgError) &&
          <div className="auth__alert-error">
            {msgError}
          </div>
        }
        <input 
          required
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
        <input 
          required
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={ loading }
        >
          Login
        </button>
        
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div 
            className="google-btn"
            onClick={ handleGoogleLogin }
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link 
          to="/public/auth/register"
          className="link"
        >
          Create new account    
        </Link>
    </form>
  </>
  )
}
