import React,{useState} from 'react'
import './SignIn.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    const url = 'https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/auth/register'
   const navigate=useNavigate()
    const initialFormData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        address: '',
        country: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };

    const handleClick = (e) => {
        e.preventDefault();
        const jsonData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            role: formData.role,
            address: formData.address,
            country: formData.country
        }
       /*  console.log(jsonData) */
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

                      if(!data.msg){
                        window.alert(`Hello ${data.user.name} , Account created successfully!`)
                     
                      }else{
                        window.alert(data.msg)
                        navigate('/')
                      }
                 
                })
        } catch (error) {
            console.log(error);
        }
    }
  return(
    <>
        <Navbar />
        <div className="signin-container">
            <div className="logoImgSignIn">
                <img src={require("./Images/Logo.png")} alt="Logo" />
            </div>
            <h1 className="SignUpheader">Registration Form</h1>
            <form onSubmit={(e) => handleClick(e)} id="SignUpForm">
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />

                <label>Password:</label>
                <input type="password" name="password" placeholder="Enter your password"  value={formData.password} onChange={handleChange} />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />

               
                <label>Country:</label>
                <input type="text" name="country" placeholder="For Example : Nepal" value={formData.country} onChange={handleChange} />

                <label>Address:</label>
                <textarea name="address" placeholder="Enter your Address" value={formData.address} onChange={handleChange} ></textarea>

                <button type="submit" >
                    
                    Submit Now
                </button>

            </form>
        </div>
    </>
  )
  }

export default SignIn