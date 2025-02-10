import React, { useState ,useEffect } from 'react'
/* import Navbar from './Navbar' */
import './Homepage.css'
/* import SignIn from './SignIn' */
import Login from './Login'
import{Link} from 'react-router-dom'


function Homepage() {
    const [quotes ,setQuote] = useState([
        "Every contribution counts, no matter how small. Together, we can make a difference.",
        
        "Be a part of something bigger. Join our crowdfunding campaign and help us achieve our goal!",
        
        "Small actions, big impact. Contribute to our campaign and be a part of the change.",
        
        "Individually, we are drops. Together, we are an ocean of possibilities. Join our crowdfunding campaign and let's make waves.",

        "Together, we can overcome any challenge. Join our crowdfunding community and help us reach new heights."
        
    ])
    const [currentIndex , setCurrentIndex] = useState(0);

    useEffect(() => {
    if (currentIndex < quotes.length) {
        const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        }, 3000);

        return () => clearTimeout(timer);
    }
    }, [currentIndex, quotes]);
    localStorage.getItem('token')
    const userinfostring=  localStorage.getItem('info')
    const userinfo=JSON.parse(userinfostring)
  

    useEffect(()=>{
        if (userinfo==='undefined') {
            console.log("djl")  
            document.getElementById("adminpanel").style.display="none";
        }else{
            console.log(userinfo)
            document.getElementById("login").style.display="none";
            if(userinfo.role==="admin"){
                document.getElementById("adminpanel").style.display="block"; 
            }
        }
    },[userinfo])

  

  return (
    <>
        <div className="HomepageContainer">
            {/* <div className="nav">
                <Navbar />
            </div> */}
        
            <section id="HomepageContent">
                <article className="articleContent">
                    {/* {quotes[0].content} */} 
                    {currentIndex < quotes.length ? (
                        <p>{quotes[currentIndex]}</p>
                    ) : (
                        setCurrentIndex(0)
                    
                    )} 

                    <div id="adminpanel">
                        <button type="button">
                           <Link to='/admin' id="btn">Admin</Link>
                        </button>
                    </div>
                </article>
                <div className="form" id="login">
                    {/* <SignIn /> */}
                    <Login />
                </div>
            </section>
        </div>
    </>
  )
}

export default Homepage
