import React from 'react'
import './IntroCard.css'
import ourintro from './OurInfo';
import Navbar from './Navbar';

function IntroCard() {
  return (
    <>
    <Navbar />
    <div className="cardContainer">
        {   
            ourintro.map((val,index) => {
                return(
                    <section className="cardContent" key={index} >
                        <div className="ProfileImg">
                            <img src={val.imageurl} alt="Person Profile" />
                        </div>
                        <h3 className="namePerson">
                            {val.Name}
                        </h3>
                        <p className="PersonDescription">
                            {val.Description}
                        </p>
                        <button type="button" id="buttonProfile">
                            <a href="./description" id="personInfo">
                                Readmore
                            </a>
                        </button>
                    </section>
                )
            })    
        }        
    </div> 
    </>
  )
}

export default IntroCard;
