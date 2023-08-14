import { useState } from 'react'
import Toggle from './Toggle'

function Register() {

    const url = 'https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/auth/login'
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [registered, setRegistered] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        const jsonData = {
            name: username,
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
                    console.log(data);
                    const parent=document.getElementById('register')
                   
                    const user=document.createElement('div')
                      if(!data.msg){
                        user.innerHTML=`Hello ${data.user.name}<br/> Account created successfully!`
                     parent.appendChild(user);
                      }else{
                          user.innerHTML=data.msg
                         parent.appendChild(user);
                      }
                 
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div className="text-center">
            <div className='border mx-12 my-4 pb-4' id="register">
                <form className="form contact-form" onSubmit={(e) => handleClick(e)}>
                    <h5 className="text-lg font-bold mb-4" >Register</h5>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>

                        <input type="text" className="form-input username-input border" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>

                        <input type="email" className="form-input username-input border" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">password</label>
                        <input type="password" className="form-input password-input border" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                        submit
                    </button>
                  
                    {/* <p id="user"></p> */}

                </form>
            </div>
            <Toggle/>
        </div>
    );
}

export default Register;