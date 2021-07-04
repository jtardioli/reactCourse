import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = (props) => (
    <div>
        <h1>My Work</h1> 
        <Link to="/project/1" >Project 1</Link> 
        <Link to="/project/2" >Project 2</Link> 
        <Link to="/project/3" >Project 3</Link> 
    
    </div>
)

export default Portfolio

