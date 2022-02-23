import React, { useState } from 'react';
import '../style/project.scss'
import { countContext } from '../context/context';
import { skils } from '../data/data';
import Items from './Project-Items/projectItems';
function project() {


  return (
    <div className='project' id='projects'>
       <div className="title">Skills</div>
    <div className="container" data-aos="fade-right">
      {skils.map(({title,icon,skills},index) =>(
        <Items key={index} title={title} icon={icon} skills={skills} />
      ) )}
    </div>

    </div>
  )
}
//        <img id='image2' src={bakc} alt="" /> background wave

export default project