import React, { useState } from 'react';
import './Credential.css';
import{useLocation, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
const initialFormData = {
    name: '',
    dob: '',
    age: '',
    documentType: ''
};

function Credential() {
    const uselocation=useLocation()
    const navigate=useNavigate()
    console.log(uselocation.state)
    const url = `https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/campaign/
    ${uselocation.state}/credentials`
    const [formData, setFormData] = useState(initialFormData);
    const [file,setFile]=useState();
 
    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
  
    if (type === 'file') {
      setFile(files)
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    };
    const handleCategoryChange = (event) => {
        const { value } = event.target;
        setFormData({
          ...formData,
          documentType: value
        });
      };
      

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('Name', formData.name);
        formDataToSend.append('DOB', formData.dob);
        formDataToSend.append('Age', formData.age);
        formDataToSend.append('documentType', formData.documentType);
        formDataToSend.append('img', file);
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: formDataToSend
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(!data.msg){
                window.alert("Your campaign is active after admin review.")
                navigate('/')
                }else{
                    window.alert(`${data.msg}`)
                }
            })
    } catch (error) {
        console.log(error);
    }
        
    };

    return (
    <>
        <Navbar />
        <div className="credential-container" >
            <div className="logoImgSignIn">
                <img src={require("./Images/Logo.png")} alt="Logo" />
            </div>
            <h1 className="Credentialheader"> Credential Form </h1>
            < form onSubmit={handleSubmit} id="CredentialForm">
                < label > Name: </label> 
                <input type="text"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                />

                <label > Date of Birth: </label>
                <input type="date"
                    name="dob"
                    value={formData.dob}
                    required
                    onChange={handleChange}
                />

                <label > Age: </label>
                <input type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <label > Document Type: </label>
                <select value={formData.documentType} onChange={handleCategoryChange}>
                <option >--select--</option>  
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="Citizenship">Citizenship</option>
            <option value="Driving License">Driving License</option>
            <option value="Animal">Animal</option>
            <option value="Others">Others</option>
            {/* Add more options as needed */}
            </select>

                <label > Images: </label>
                <input type="file" name="img" required multiple onChange={handleChange} />

                <button type="submit" > Submit </button> </form>
        </div>
    </>
    
    );
}

export default Credential;

