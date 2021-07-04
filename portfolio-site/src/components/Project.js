import React from 'react'

const Project = (props) => (
    <div>
        <h1>Project</h1> 
        <p>This is the project with id# {props.match.params.id}</p>
    
    </div>
)

export default Project