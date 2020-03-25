import React,{ useState } from 'react';

import styled from 'styled-components';
const Div = styled.div`
padding: 2%;
form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    input {
        margin: 1em 0em;
        font-size: 1.2em;
    }
    button {
        margin: 1em 0em;
        height: 2em;
        width: 6em;
        font-size: 1.2em;
        cursor: pointer;
    }
}
`

const Login = () => {

    const [credentials, updateCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        updateCredentials({...credentials,[e.target.name]: e.target.value})
    }
    return (
        <Div>
            <h1>Already have an account? Log in here!</h1>
            <form>
                <input 
                name='username'
                type="text"
                placeholder='Username'
                value={credentials.username}
                onChange={handleChange}
                />
                <input 
                name='password'
                type="text"
                value={credentials.password}
                onChange={handleChange}
                placeholder='Password'
                />

                <button>Login</button>
            </form>
        </Div>
    );
}

export default Login;
