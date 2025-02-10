import { useEffect, useState } from 'react'
import Toggle from './Toggle'
import{useNavigate} from 'react-router-dom'
function Login() {
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
    console.log(userinfo)
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
                    user.innerHTML=`Hello ${data.user.name}<br/> Login successfully!`
                   parent.appendChild(user);
                   setUserToken(data.token)
                   setUserinfo(data.user)
                   setTimeout(()=>{
                    navigate('/',{state:data.token})
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

        <div className="text-center ">
            <div className='border mx-12 my-4 pb-4 ' id='login'>
                <form className="form contact-form" onSubmit={(e) => handleClick(e)}>
                    <h5 className="text-lg font-bold mb-4">Login</h5>
                 
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
                  
                </form>
            </div>
            <Toggle/>
        </div>
    );
}

export default Login;