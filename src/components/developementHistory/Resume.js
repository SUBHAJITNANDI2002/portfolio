import React from 'react'
import Lists from './Lists'

function Resume() {
    const obj=[
        {
            year: "2012 - 2018",
            heading: " SECONDARY",
            subheading:"PURULIA M.M.HIGH SCHOOL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"



        },
        {
            year: "2018 - 2020",
            heading: "HIGHER SECONDARY",
            subheading:"PURULIA M.M.HIGH SCHOOL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"


        },
        {
            year: "2020 - 2024",
            heading: "BTECH IN INFORMATION TECHNOLOGY",
           
            subheading:"HALDIA INSTITUTE OF TECHNOLOGY",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam assumenda eligendi impedit eveniet atque iste beatae nam? Magnam, sequi?"

        }
    ]
    
  return (
    <section className='intro'>
        <div className="container">
            <h2>Education</h2>

            <Lists obj={obj}/>
        </div>
    </section>
  )
}

export default Resume