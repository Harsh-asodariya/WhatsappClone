import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(user)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error) => alert(error))
    };

    return (
        <div className='login'>
            <div className='login_Container'>
                <img 
                src='https://wallpaperaccess.com/full/3852207.jpg'
                alt=''/>
                <div className='login_text'>
                    <h1>Sign in to friends</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
