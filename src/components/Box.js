import React from 'react'
import './Box.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/*
function Box() {
  return (
    <>
        <div className="container">
            <div className="imageBox">
                <img src="https://images.unsplash.com/photo-1616731948638-b0d0befef759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="HeaderImg" />
                <p className="dayCount">6 Days Left</p>
                <p className="goalStatus">Goal Reached</p>
            </div>
            <h2 className="headerText">
                Lorem ipsum dolor sit 
            </h2>
            <div className="btn">
                <input type="button" value="Donate" />
            </div>
            <footer className="footer">
                <div className="box">
                    <h3>Raised</h3>
                    <p>$252,215</p>
                </div>
                <div className="box">
                    <h3>Donate</h3>
                    <p>$252,215</p>
                </div>
                <div className="box">
                    <h3>Left</h3>
                    <p>$252,215</p>
                </div>
                
            </footer>
        </div>
    </>
  )
}

export default Box */
import { useEffect, useState } from "react";
import Navbar from './Navbar';
/* import { useLocation } from "react-router-dom"; */

function Campaign() {
    const url = 'https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/campaign';
    const [campaigns, setCampaigns] = useState([])
 const navigate=useNavigate()
 
/*  const location = useLocation();
 if(location.state){

     const camp = location.state;
     setCampaigns(camp)
 } */

    /* console.log(localStorage.getItem('token')); */
    useEffect(() => {
        try {
            fetch(url, {
                method: 'GET',
                
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log(data.filteredCampaign)
                    setCampaigns(data.filteredCampaign)
                })
        }catch (error) {
            console.log(error);
        }
    },[])
 const handleSubmit=(data,e)=>{
    e.preventDefault()
    navigate('/campaigndesc',{state:data})
 }
    return (
        <>
            <Navbar />
            <div className="wholeContainerCampaign">
                
                <h1 className="Boxheader">
                    Our Campaigns
                </h1>

                <div id="jobs">
                            
                    {campaigns.length === 0 ? (
                            <h1>NO Campaign to show</h1>
                        ) : (
                            campaigns.map((campaign,index) => {
                                return (
                                <>
                                    <div className="Boxcontainer" key={campaign._id}>
                                        <div className="imageBox">
                                            <img src={`data:image/jpeg;base64,${campaign.img}`} alt="image" />
                                            <p className="dayCount">6 Days Left</p>
                                            <p className="goalStatus">{campaign.progress}</p>
                                        </div>
                                        <h2 className="headerText">
                                            {campaign.title}
                                        </h2>
                                        <div className="btn">
                                            <input type="button" value="Donate" onClick={(e)=>handleSubmit(campaign,e)} />
                                        </div>
                                        <footer className="footer">
                                            <div className="box">
                                                <h3>Raised</h3>
                                                <p>{campaign.fundsRaised}</p>
                                            </div>
                                            <div className="box">
                                                <h3>Goals</h3>
                                                <p>{campaign.goal}</p>
                                            </div>
                                            <div className="box">
                                                <h3>Left</h3>
                                                <p>{campaign.fundsNeeded}</p>
                                            </div>
                                        </footer>
                                        </div>
                                    </>
                                );
                            })
                        )}
                </div>
            </div>
        </>
    );
}

export default Campaign;