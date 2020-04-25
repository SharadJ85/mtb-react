import React from "react";
import blazingHeart from '../../assets/images/blazing-heart.png'


const Footer = () => {
  return (
    <div className="container-fluid h-100 m-0 pt-4 row"
         style={{height: "5rem",width: "100%", backgroundColor: "#0a0a0a"}}>
      <div className="col my-auto text-center">
        <h5>Created with
          <img src={blazingHeart} alt="blazingHeart" className="mx-3" style={{height:"5.5rem"}}/>
          by
          <a href="https://github.com/SharadJ85" className="mx-2" rel="noopener noreferrer" target="_blank">Sharad Jadhav</a></h5>
      </div>
    </div>
  )
};

export default Footer;