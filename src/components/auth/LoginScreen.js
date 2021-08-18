import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues;


  const handleLogin = (e) => {
    e.preventDefault()
    dispatch( startLoginEmailPassword(email, password) )
  }

  return (
    <div>
      <form onSubmit = { handleLogin }>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value = {email}
          onChange = { handleInputChange }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value = {password}
          onChange = { handleInputChange }
        />
        <button
          type="submit"
        >
          Login
        </button>

        <div>
          <p>Login With Social Networks</p>
          <div>
            <p>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          to="/auth/register"
        >
          Create New Account
        </Link>
      </form>
    </div>
  )
}
