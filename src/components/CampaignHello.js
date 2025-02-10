import React, { useState } from 'react';
import './CampaignHello.css';
import{useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
const initialFormData = {
  title: '',
  goal: '',
  story: '',
  category:'Child',
  fundraisingPeriod: ''
};

function CampaignHello() {
    const url = 'https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/campaign'
  const navigate=useNavigate()
  const [formData, setFormData] = useState(initialFormData);
  const [file,setFile]=useState();
 
const handleChange = (event) => {
    const { name, value, type, files } = event.target;
  
    if (type === 'file') {
      setFile(files[0])
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
      category: value
    });
  };
  
  
  localStorage.getItem('token')
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('goal', formData.goal);
    formDataToSend.append('story', formData.story);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('FundraisingPeriod', formData.fundraisingPeriod);
    formDataToSend.append('img', file);
    // for (const [key, value] of formDataToSend.entries()) {
    //   console.log(${key}: ${value});
    
    // }
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization:` Bearer ${localStorage.getItem('token')}`,
            },
            body: formDataToSend
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                const parent=document.getElementById('campaign-container')
                // parent.innerHTML='';
                  const user=document.createElement('div')
                    if(!data.msg){
                    user.innerHTML=`${data.message}`
                   parent.appendChild(user);
                   setTimeout(()=>{
                    navigate('/credential',{state:data.campaign._id})
                   }, 3000);
                    }else{
                        user.innerHTML=data.msg
                       parent.appendChild(user);
                    }
            })
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
        <Navbar />
        <div className="Campaign-container" id="campaign-container">
            <div className="logoImgSignIn">
                <img src={require("./Images/Logo.png")} alt="Logo" />
            </div>
            <h1 className="Campaignheader">Create a Campaign</h1>
            <form onSubmit={handleSubmit} id="CampaignForm">
                <label>Title:</label>
                <input type="text" required name="title" value={formData.title} onChange={handleChange} />

                <label>Real Money Goal:</label>
                <input type="number" required name="goal" value={formData.goal} onChange={handleChange} />

                <label>Story:</label>
                <textarea name="story" required value={formData.story} onChange={handleChange}></textarea>

                <label>Category:</label>
                {/* <input type="text" name="category" value={formData.category} onChange={handleChange} /> */}
                <select value={formData.category} onChange={handleCategoryChange}>
                    <option value="Education">Education</option>
                    <option value="Child">Children</option>
                    <option value="Food&Hunger">Food & Hunger</option>
                    <option value="Women&Girls">Women and girls</option>
                    <option value="Medical">Medical</option>
                    <option value="Animal">Save Animals</option>
                    <option value="Environment">Environment</option>
                {/* Add more options as needed */}
                </select>

                <label>Fundraising Period (months):</label>
                <input type="number" required name="fundraisingPeriod"  value={formData.fundraisingPeriod} onChange={handleChange} />

                <label>Image :</label>
                <input type="file" name="img" required onChange={handleChange} />

                <button type="submit">Create Campaign</button>
            </form>
        </div>
    </>
    
  );
}

export default CampaignHello;