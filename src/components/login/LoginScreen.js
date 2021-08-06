import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
        type: types.login,
        payload: {
            name: 'luis'
        }
    });

    history.replace( lastPath );
    
}

  return (
    <div>
      <h1>Login</h1>
            <hr />

            <button
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
  )
}
