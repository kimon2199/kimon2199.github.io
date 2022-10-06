import { useState } from "react";

const ProjectCard = (props) => {

  return (
    <div class="card"> 
      <ul class="ul">
        <li>
          View Code
        </li>
        <li>
          Live Demo
        </li>
      </ul>
      <div className="rounded-[15px]">
        <img className="object-cover" src={props.pic} alt="No pic"/> 
      </div>
      <div class="con-text">
        <h2 className="">
          {props.name} 
        </h2>
        <p>
          Paris, the capital of France, is a major European city and a world center for gastronomy and culture. Its 19th century urban landscape is intersected by wide boulevards and the River Seine.
          {/* <button>See more</button> */}
        </p>
      </div> 
    </div>
    )
}

export default ProjectCard;