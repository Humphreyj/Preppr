import React,{ useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
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

const Register = () => {

    const {userData, setUserData} = useContext(UserContext);

    const [credentials, updateCredentials] = useState({
        organization: '',
        org_type: '',
        role: '',
        username: '',
        password: ''
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setUserData(credentials);
    //     console.log(credentials)
    // }

    const handleChange = e => {
        updateCredentials({...credentials,[e.target.name]: e.target.value})
        setUserData({...userData,[e.target.name]: e.target.value})
    }
    return (
        <Div>
            <h1>Sign your organization up to get started!</h1>
            <form>
            <input 
                name='organization'
                type="text"
                placeholder='Organization'
                value={credentials.organization}
                onChange={handleChange}
                />

            <div className="type-box">
                <p>Business type</p>
                <select name="role" value={credentials.type} onChange={handleChange}>
                    <option value='Catering'>Catering Company</option>
                    <option value='Bar'>Bar</option>
                    <option value='Hotel'>Hotel</option>
                    <option value='Restaurant'>Restaurant</option>
                </select>
            </div>

            <div className="role-box">
                <p>Your Role</p>
                <select name="role" value={credentials.role} onChange={handleChange}>
                    <option value='Chef'>Chef</option>
                    <option value='Manager'>Manger</option>
                </select>
            </div>

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
                <Link to='/master'><button >Register</button></Link>
                
            </form>
        </Div>
    );
}

export default Register;