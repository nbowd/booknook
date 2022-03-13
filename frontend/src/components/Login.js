import React, { useState } from 'react'
import Button from './Button'
import LoginModal from './LoginModal'

function Login({props}) {
    const {setUser, setToken, setResults, user} = props
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)

    const loginProps = {
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword
    }
    const handleLogout = () => {
        setEmail('')
        setPassword('')
        setUser(null)
        setToken(null)
        setResults(null)
        window.localStorage.removeItem('loggedBookappUser')
        setIsOpen(false)
      }
    
    props.modalType = modalType

    const loginClick = () => {
        setModalType('Login')
        setIsOpen(true)
    }

    const registerClick = () => {
        setModalType('Register')
        setIsOpen(true)
    }
    return (
        <div className="user-info">
            <h3 className="login-status">{user? `Welcome, ${user.username}`: 'Not Logged In'}</h3>
            { user?
                <Button className="login-btns" message="Sign Out" onClick={()=>handleLogout()}/> 
            : <>
                <Button className="login-btns" message="Sign In" onClick={loginClick} />
                <Button className="login-btns" message="Register" onClick={registerClick} />
                <LoginModal open={isOpen} close={()=>setIsOpen(false)} appProps={props} loginProps={loginProps} />
            </>
            }
      </div>
    )
}

export default Login
