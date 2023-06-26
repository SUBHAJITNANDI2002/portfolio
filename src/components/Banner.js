import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";


const Banner = () => {
  return (
    <header>
        <img src="https://images.pexels.com/photos/16105561/pexels-photo-16105561/free-photo-of-blurred-coding-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <img src="https://lh3.googleusercontent.com/CTDSSFYJhG1-mpQGjLPifmnbJQ0zFYXhsVonjsSHCJZ9ch2SkdUWLm9EGYqCssJD62WCLrz8w0B9hjrWmePDxqIJWrpYTrM1wRVEeNrt9D1inWgLTMFXbqvYQ4800p7ek9_PXyqiTfYIAhwiWfZOt22E5-YjJINjDtq8zLoRwsJ7NaWaspynX8WSBaZDN6Dbvrdesu_NLEE4SUiAKu9w_pwW7X_h1kWBthYAoefOfWh1wYt92Ci6btl6Qy70p4sRLvLx6SVLwrdbUmyFxZKr0uzSaEoyBUgi7j_A9bu5xBRUkSdIUn6ww0JkayFsppmcDS7gznzcDSyTynrsi5BSdD4NWJ9xbd4e74ZRpdXQcHWwvs3WgSmBCtCmmFcWAeKXmMIDAcc9E3g4l-x0AkCxcjac4T1VZopN9BH5Ya0vQcrjUy_Q-WejbnDvIf65ugKwGoGYvkpVb7mbBNx9C0LRSFCPL0ykMmE7xG9fsKJMyt21g_bQfkgiXyZWjRBEWhMlT8MgeSMhon0wVRXxCCvcgdFZDo1YWI0gnBw-9Rq7A0zKUBd_Mpvjev4GeHUMztjvSGHhLFbe9aDbMKSgXkJGJFcGV13g4i0ONWGaqQKIREu08GcRYC5DlzxhcLPHGBIoxosMiomQhIKa86m1kJU-SIXa7Q1Ul5rC6OugRqtL27CK8HZc9hrN7tD7j6GBt3IFTRcVZea2tnEWWOHV1uJRyV9zr1v2UEXo53ZfPYIpjiZ_k21zwrlrbOpNOq3XtEDWKoK4AzU9F7WWarPTbFS7BjgwW29IauqJwR3nntuuUjXDn20p7NQVKrERbNO6dWlTKN56p9B0qsy7Mm96otjdImJWfL3fI7JM-f_ApkKRC7Fnj1BQcS2aMLbFLEw_Ny7RotFB8GmXVBimoLnhsVQ8wWmX7cztIZp6G7Sp9jFG78TJiA2WkB39W1QWwFFvFdyiY4bQudnJdc8642I5tuSlZ74dwg3QVWg7FUnNz82mJ23afYb_EggH3Q=w677-h902-s-no?authuser=0" alt="profile-image" />





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
