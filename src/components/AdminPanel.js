import React from 'react'
import './AdminPanel.css'
import './Box.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function AdminPanel() {
    const url = 'https://software-engineering-project-ja6n.onrender.com/api/v1/pendingcampaign';
    const [campaigns, setCampaigns] = useState([])
    const [searchTerm,setSearchTerm]=useState('')

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
    },[campaigns])
    

 const handleaccept=(id,e)=>{
    e.preventDefault();
    const updateurl=`https://software-engineering-project-ja6n.onrender.com/api/v1/campaign/${id}`;
    try {
         const jsonData={
            status:"Approved"
         }   
        fetch(updateurl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization:` Bearer ${localStorage.getItem('token')}`,
      
            },
            body: JSON.stringify(jsonData)
        }).then((responce) => responce.json())
            .then((data) => {
                console.log(data)
                if(data.msg){
                    window.alert(data.msg)
                }
                else{
                    window.alert("Your data has been accepted")
                }
                
            })
    } catch (error) {
        console.log(error);
    }
 }
 
 const handleCredential=(id,e)=>{
    e.preventDefault();
    const updateurl=`https://software-engineering-project-ja6n.onrender.com/api/v1/campaign/${id}/credentials`;
    try {
          
        fetch(updateurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:` Bearer ${localStorage.getItem('token')}`,
      
            },
        }).then((responce) => responce.json())
            .then((data) => {
                console.log(data)
                window.alert(data)
            })
    } catch (error) {
        console.log(error);
    }
 }
 const handleSearch=(e)=>{
    e.preventDefault()
    const searchurl = `https://software-engineering-project-ja6n.onrender.com/api/v1/pendingcampaign?name=${searchTerm}`;
        try {
            fetch(searchurl, {
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
   
 }
  return (
    <>
        <div className="adminContainer">
            <nav className="adminNav">
                <div className="adminLogo">
                    <div className="AdminimgLogo">
                        <img src={require("./Images/Logo.png")} alt="LogoImg" className="Img"/>
                    </div>
                    <div className="AdminlogoText">
                        Dream<span>Backers</span>
                    </div>
                </div>
                <div className="adminSearchBox">
                    <div className="adminSearch">
                        <input type="search" name="mySearch"
                        value={searchTerm}

                        onChange={(e)=>
                            setSearchTerm(e.target.value)} id="mySearch" placeholder='Search' />
                    </div>
                    <div className="adminSearchIcon" onClick={(e)=>handleSearch(e)}>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </nav>

            <div className="AdminCampaign" id="jobs2">
                {campaigns.length === 0 ? (
                        <h1>NO Campaign to show</h1>
                    ) : (
                        campaigns.map((campaign,index) => {
                            return (
                            <>
                                <div className="adminseccontainer" key={index}>
                                    <div className="imageBox">
                                        <img src={`data:image/jpeg;base64,${campaign.img}`} alt="image" />
                                        <p className="dayCount">6 Days Left</p>
                                        <p className="goalStatus">{campaign.progress}</p>
                                    </div>
                                    <h2 className="headerText">
                                        {campaign.title}
                                    </h2>
                                    <div className="Adminbtn">
                                        <div className="btnAccept">
                                            <input type="button" onClick={(e)=>handleaccept(campaign._id,e)} value="Accept"  />
                                        </div>
                                        <div className="btnCredential">
                                            <input type="button" onClick={(e)=>{handleCredential(campaign._id,e)}} value="Credential" />
                                        </div>
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

            <div className="adminBtnHome">
                <button type="button">
                    <Link  to="/home" id="adminBtnLink" >
                        Back to Home
                    </Link>
                </button>
            </div>


        </div>
    </>
  )
}

export default AdminPanel
