import React,{useState} from 'react'
import img1 from './Images/Funding_HomePage.png'
import img2 from './Images/Funding_HomePage3.png'
import img3 from './Images/Funding_Homepage2.png'
import img4 from './Images/Funding_Homepage4..png'

function WorkingProcess() {

    const images = [
        img1 , img2 , img3 ,img4
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    }
        
  return (
    <div className="slider">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  )
  }
  
  export default WorkingProcess;