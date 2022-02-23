import React from 'react'
import { portofolio } from '../../data/data'
import Items from './portofolio-Item/portofolio-items'
import './portofolio.scss'


function myproject() {
  return (
    <div className='project'>
       
             <h1 className='title'>My Project</h1>
          <div className="container">
              {portofolio.map(({title,icon,text,gitHub,live},index)=>(
                 <Items 
                  key={index}
                  title={title}
                  icon={icon}
                  text={text}
                  gitHub={gitHub}
                  live={live}  
                  />
              ))}
          </div>
    </div>
  )
}

export default myproject