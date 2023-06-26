import React from 'react'

function Skills() {
    const skillsData=[
        {
            skill:"HTML5",
            proficiency:"50"

        },
        {
            skill:"CSS",
            proficiency:"50"

        },
        {
            skill:"REACTJS",
            proficiency:"60"

        },
        {
            skill:"JAVA",
            proficiency:"70"

        },
        {
            skill:"JAVASCRIPT",
            proficiency:"60"

        },
        {
            skill:"SQL",
            proficiency:"80"

        },
        {
            skill:"DATA STRUCTURE",
            proficiency:"70"

        },
        {
            skill:"GIT",
            proficiency:"70"

        },
    ]
  return (
    <section className='skills'> 
        <div className="container">
            <h2>Skills</h2>
            <ul>
                {skillsData.map((skill,ind)=>(
                    <li key={ind}>
                        <p>{skill.skill}</p>
                        <div className="progress-bar">
                            <div className='progress' style={{width:skill.proficiency+"%"}}></div>

                        </div>
                        <p className="percentage">{skill.proficiency}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Skills