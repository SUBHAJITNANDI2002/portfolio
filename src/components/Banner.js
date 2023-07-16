import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
import photo from '../image/Subhajit_passport.JPG';


const Banner = () => {
  return (
    <header>
        <img src="https://images.pexels.com/photos/16105561/pexels-photo-16105561/free-photo-of-blurred-coding-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <img src={photo} alt="profile-image" />





                {/* <img src="https://lh3.googleusercontent.com/pw/AJFCJaVnZzCade-6slCf9hWiU5krTRzqxFYt5JWYETB-uGzkmBFKGRZv5MCVKd3kqsKNSCm-Zss9Gp9l3T60pvx_58vQ2MP1oVMtbX4FDWcQcXOaeDY2LDF9HANgFTZeeVCR7yOrplBlmths18o78yqT9C-z=w507-h902-s-no?authuser=0" alt="profile-image" /> */}
                <div className="personal-info">
                    <h1>Subhajit Nandi</h1>
                    <p>Frontent Web Developer</p>
                    <div className="bio">
                        <div className="row">
                            <div className="info">Age</div>
                            <div className="detail">21Yr</div>

                            <div className="info">Phone</div>
                            <div className="detail">+918927264906</div>

                            <div className="info">Email</div>
                            <div className="detail">nandisubhajit2002@gmail.com</div>

                            <div className="info">Address</div>
                            <div className="detail">Purulia</div>
                        </div>
                    </div>

                <div className="social">
                    <div className="links">
                        <a href="https://github.com/SUBHAJITNANDI2002">

                        <AiFillGithub/>
                        </a>

                    </div>
                    <div className="links">
                        <a href="https://www.instagram.com/_subhajit.exe/?hl=en">
                        <AiFillInstagram/>

                        </a>

                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/subhajit-nandi-a60700211/">
                        <AiFillLinkedin/>

                        </a>

                    </div>


                    <div className="links">
                        <a href="https://www.facebook.com/subhajit.nandi.7927/">
                        <AiFillFacebook/>

                        </a>

                    </div>
                </div>


                </div>
            </div>
            </div>     
    </header>
  )
}

export default Banner
