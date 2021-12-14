import React, { useState } from 'react'
import Button from './Button'
import LoginModal from './LoginModal'

function Login({props}) {
    const {setEmail, setPassword, setUser, setToken, user} = props
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)

    const handleLogout = () => {
        setEmail('')
        setPassword('')
        setUser(null)
        setToken(null)
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
                <Button message="Sign Out" onClick={()=>handleLogout()}/> 
            : <>
                <Button className="login-btn" message="Sign In" onClick={loginClick} />
                <Button className="register-btn" message="Register" onClick={registerClick} />
                <LoginModal open={isOpen} close={()=>setIsOpen(false)} props={props} />
            </>
            }
      </div>
    )
}

export default Login
