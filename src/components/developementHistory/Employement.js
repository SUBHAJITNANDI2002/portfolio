import React from 'react'
import Lists from './Lists'

function Employement() {
    const obj=[
        {
            year: "2012 - 2018",
            heading: " SOFTWARE ENGINEER",
            subheading:"APPLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"



        },
        {
            year: "2018 - 2020",
            heading: "WEB DESIGNER",
            subheading:"FACEBOOK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"


        },
        {
            year: "2020 - 2024",
            heading: "FRONT-END WEB DEVELOPER",
            subheading:"AMAZON",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"

        }
    ]
    
  return (
    <section className='intro'>
        <div className="container">
            <h2>Employement</h2>

            <Lists obj={obj}/>
        </div>
    </section>
  )
}

export default Employement