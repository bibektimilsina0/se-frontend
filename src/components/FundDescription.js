import React from 'react'
import './FundDescr.css'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import DonateButton from './DonateButton'
function FundDescription() {
      const location = useLocation();
  const campaign = location.state;
    console.log(campaign)
  return (
    <>
        <Navbar />
        <div className="FunddescContainer">
            <div className="FunddescContent">
                <h3 className="funddescheader">
                    {campaign.title}
                </h3>

                <main className="funddescmainBox">
                    <div id="imageBox">
                        <img src={`data:image/jpeg;base64,${campaign.img}`} alt="DetailsPic" srcset="" />
                    </div>
                    <div className="asideBox">
                        {/* <button className="donateFund">
                            Donate Now
                        </button> */}
                          <div className='donatebutton' >
                                  
                                    <DonateButton campaignId={campaign._id}/>
                                </div>
                               
                        <div className="spreadFund">
                            <div className="iconFund">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <p>Spread The Word</p>
                        </div>
                        <h2 className="raisedFunddesc">
                            ${campaign.fundsRaised}
                        </h2>
                        <p className="goalFunddesc">
                            raised  out of ${campaign.goal}
                        </p>

                        <div className="progressBarDesc">
                            <div className="innerText">
                                
                            </div>
                        </div>

                        <div className="timeleftFund">
                            {campaign.FundraisingPeriod + ` `} days left
                        </div>
                    </div>
                </main>

                <section className="AboutFundraiserdesc">
                    <h2>About Fundraiser</h2>
                    <p>{campaign.story}</p>
                </section>

            </div>
        </div>
    </>
  )
}

export default FundDescription
