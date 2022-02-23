import React from 'react'
import { skils } from '../../data/data';
import './items.scss'
function Items({title,icon,skills}) {
  return (
    <div className='items'>
     
      <img src={icon} alt={title} />

       <h1>{title}</h1> 

     <div className="tags">
     {skills?.map((tag,index)=>(
         <span className='tags_item' key={index}>{tag}</span>
     ))}
     </div>

     <div className="cover"></div>

   
    </div>
    
  )
}

export default Items