import React,{useEffect,useRef} from 'react'
import { init } from "ityped";
import '../style/intro.scss'
import image from '../assets/img/net1.png'

function intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Web-designer", "Expert"],
    });
  }, []);

  return (
    <div className='intro' id='intro'  >
      <div className="left">
        <img src={image} alt="" data-aos="fade-right" />
      </div>
      <div className="right">

        <div className="wraper" data-aos="fade-up">

        <h3>Hello everyone I'm</h3>
        <h1> Armando Buruian</h1>
       <h2> <span ref={textRef}></span></h2> 
        </div>
      
        </div>

    </div>
  )
}

export default intro