import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegisterEmailPassword } from '../../actions/auth';

import { useForm } from '../../hooks/useForm'
import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { handleFormRegister } from '../../helpers/handleFormValid';

export const RegisterScreen = () => {
  
  const dispatch = useDispatch()
  const {msgError, loading} = useSelector(state => state.ui) 
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const {name, email, password, passwordConfirm} = formValues;
  
  console.log('object')
  
  const handleRegister = (e) => {
    e.preventDefault()
    isValidForm()
  }
  
  const isValidForm = () => {
    const validate = handleFormRegister(name, email, password, passwordConfirm)
    if (validate !== '') {
      dispatch( setError(validate))
      dispatch( startLoading() )
      setTimeout(() => {
        dispatch(removeError())
        dispatch( finishLoading() )
      }, 3500);
    } else {
      dispatch( removeError() )
      dispatch( startRegisterEmailPassword(email, password, name) )
    }
  }
  

  return (
    <>
    <h3 className="auth__title">Register</h3>
      <form onSubmit = {handleRegister}>

        {
          msgError &&
          (
            <div className="auth__alert-error">
              {
                msgError
              }
            </div>
          )
        }

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          autoComplete="off" 
          name="name"
          value = {name}
          onChange = { handleInputChange }
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value= {email}
          onChange = { handleInputChange }
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value= {password}
          onChange = { handleInputChange }
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange = { handleInputChange }
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={ loading }
        >
          Registered
        </button>

        <Link
          to="public/auth/login"
        >
          Already registered?
        </Link>
      </form>
  </>
  )
}
