import React,{useState} from 'react'
// import './Homepage.css'

function Home() {
    const quotes = [
        {
            content:"Every contribution counts, no matter how small. Together, we can make a difference."
        },
        {
            content:"Be a part of something bigger. Join our crowdfunding campaign and help us achieve our goal!"
        },
        {
            content:"Small actions, big impact. Contribute to our campaign and be a part of the change."
        },
        {
            content:"Individually, we are drops. Together, we are an ocean of possibilities. Join our crowdfunding campaign and let's make waves."

        },
        {
            content:"Together, we can overcome any challenge. Join our crowdfunding community and help us reach new heights."
        },
    ]

    console.log(localStorage.getItem('token'));
    return ( 
        <>
            <section id="Homepage">
                <article className="articleContent">
                    {quotes[0].content}  
                </article>
                <aside className="form">
                    <div className='HomeLogo'>
                        <img src="https://media.istockphoto.com/id/1320054764/photo/portrait-of-young-nepali-boy-in-bhaktapur-nepal.jpg?s=612x612&w=0&k=20&c=OMV8IInk59-KsUn7JBw_HCOgwJTky7tbH7fiG-CDcxk=" alt="" />
                    </div>
                    <p className="headerContent">
                        Need Money Urgently?
                    </p>
                    <div className="chatsection">
                        <div className="chaticon">
                            <i className="fas fa-comment-dots"></i>
                        </div>
                        <p>Chat With Us</p>
                    </div>
                    <div className="inputName">
                        <input type="text" name="UserName" placeholder="Name *" />
                    </div>
                    <div className="inputEmail">
                        <input type="email" name="UserEmail" placeholder="Email Address *" />
                    </div>
                    <div className="inputNumber">
                        <input type="number" name="UserNumber" placeholder="Your Mobile Number *" />
                    </div>
                    <div className="inputCategories">
                        <input type="text" name="UserNumber" placeholder="What will be the funds be used for? *" />
                    </div>
                    <div className="fundraiserbtn">
                        <button>START A FUNDRAISER</button>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default Home;