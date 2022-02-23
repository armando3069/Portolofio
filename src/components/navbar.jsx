
import '../style/nav.scss'

function navbar({openMenu, setOpenMenu}) {
  return (
    <div className={"navbar " + (openMenu ? 'active' : null)} >

     <div className="wrapper">
     <div className="leftSide">
      <a href="#contacts">My story</a>
     </div>

     <div className="rightSide">
     <div className="hamburger"onClick={()=>setOpenMenu(!openMenu)} >
         <span className='line1'></span>
         <span className='line2'></span>
         <span className='line3'></span>
     </div>
     </div>

     </div>

    </div>
  )}

export default navbar;