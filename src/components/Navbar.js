import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const url=`https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/campaign`
  
    const navigate=useNavigate()
    const [filter,setFilter]=useState('')
    const haldlefilter=(e)=>{
        e.preventDefault()
        try {
            const fiiterurl=`${url}?category=${filter}`;
            fetch(fiiterurl, {
                method: 'GET',
                headers: {
                    Authorization:` Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log(data.filteredCampaign)
                     navigate('/campaign',{state:data.filteredCampaign})  
        
                })
        } catch (error) {
            console.log(error);
        }
        }
  return (
    <>
        <nav className="navContainer">
            <aside className="logo">
                <div className="imgLogo">
                    <img src={require("./Images/Logo.png")} alt="LogoImg" className="Img"/>
                </div>
                <div className="logoText">
                    Dream<span>Backers</span>
                </div>
            </aside>

            <main className="navList">
                <li className="navElement">
                    <Link to="/ourintro" className="navLink">Who we are</Link>
                </li>
                <li className="navElement">
                    <Link to="/campaign" className="navLink">Browse Fundraisers</Link>
                </li>
                <li className="navElement">
                    <Link to="/" className="navLink">How it Works</Link>
                </li>
                {/* <li className="navElement">
                    <Link to="/" className="navLink">Fundraises For</Link>
                    
                    
                </li> */}
                <div class="navElement" >
                    <select id="myDropdown" value={filter} onChange={(e)=>{setFilter(e.target.value);haldlefilter(e)}} className="navElement">
                        <option >Fundraise For</option>
                        <option value="Education">Education</option>
                        <option value="Child">Children</option>
                        <option value="Food&Hunger">Food & Hunger</option>
                        <option value="Women&Girls">Women and girls</option>
                        <option value="Medical">Medical</option>
                        <option value="Animal">Save Animals</option>
                        <option value="Environment">Environment</option> 
                    </select>
                </div>
                    
            </main>

            <aside className="btnList">
                <button type="button" id="donate" ><Link to="/campaign" className="donate">Donate</Link></button>
                <button type="button" id="fundraise"><Link to="/campaignhello" className="fundraise">START A FUNDRAISER</Link></button>
            </aside>
        </nav>
    </>
  )
}

export default Navbar
