import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import {types} from '../../types/types';

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log(lastPath)

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Diego',
            }
        })
        history.replace(lastPath);
    }

    return (
        <div>
            <h3>Login</h3>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;