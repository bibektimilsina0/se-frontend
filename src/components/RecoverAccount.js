import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import './RecoverAccount.css'
import { useNavigate } from 'react-router-dom'

function RecoverAccount(){
    const url = 'https://software-engineering-project-ja6n.onrender.com/api/v1/auth/forgotpassword'; 
    const [email,setEmail]=useState('')

   const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const jsonData={
            email:email
        }
        console.log(jsonData)
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            }).then((response) => response.json())
            .then((data)=>{
                console.log(data)
                if(data.msg){
                    window.alert(`${data.msg}`)
                }else{
                navigate('/reset')
                }
            })
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
        <div className="Recovercontainer" >
            <form className="RecovermainBox" onSubmit={(e)=>handleSubmit(e)}>
                <h2>Find Your Account </h2>
                <div className="horizontal_ruler">

                </div>
                <p className="RecoverText">Please enter your email or mobile number to search for your account.</p>
                <div className="Recoveremail">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email or phone" required/>
                </div>
                <div className="horizontal_ruler">

                </div>
                <div id="btnRecover">
                    <button type="submit" id="RecoverSend" >
                     Reset
                       
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RecoverAccount
