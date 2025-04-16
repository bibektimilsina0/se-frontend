import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import{useNavigate} from 'react-router-dom'

function Login() {

    const url = 'https://software-engineering-project-ja6n.onrender.com/api/v1/auth/login'
    const navigate=useNavigate()
 
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [userToken, setUserToken] = useState('')
    const [userinfo,setUserinfo]=useState('')
    useEffect(()=>{
        localStorage.setItem('token',userToken)
        localStorage.setItem('info',JSON.stringify(userinfo))
    },[userToken,userinfo])
 
    const handleClick = (e) => {
        e.preventDefault();
        const jsonData = {
            email: email,
            password: password
        }
        try {


            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            }).then((responce) => responce.json())
                .then((data) => {
                    console.log(data)
                //     console.log(data.user.name);
                 
                  const parent=document.getElementById('login')
                  const user=document.createElement('div')
                    if(!data.msg){
                 
                   setUserToken(data.token)
                   setUserinfo(data.user)
                   setTimeout(()=>{
                    navigate('/')
                   }, 4000);
                    }else{
                        user.innerHTML=data.msg
                       parent.appendChild(user);
                    }
                  
                })
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }
  return (
    <>
        <form id="Loginform" onSubmit={(e) => handleClick(e)}>
            <div className="Box">
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or phone number" />
            </div>
            <div className ="Box">
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>

            <div>
                <button type="submit" id="Login">Log in</button>
            </div>
            <p>
                <Link to="./recover">Forgot password?</Link>
            </p>
            <div class="horizontal_line"></div>
            <div>
                <Link to="./signup">
                    <input type="button" value="Create new account" />
                </Link>
            </div>
        </form>
    </>
  )
}

export default Login
