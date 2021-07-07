import React from 'react'
import classes from './HomePageFourthSection.module.css'
import {Link} from 'react-router-dom'

class HomePageFourthSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
               <div className={classes.FirstSection}>
                 <p>We are</p>
                 <p>spread around</p>
                 <p>the world</p>
               </div>
               <div className={classes.SecondSection}>
  
               </div>
               <div className={classes.ThirdSection}>
                 <p>
                  Sed consequat varius eros eget vestibulum! Nullam 
                  bibendum, eros quis aliquet dictum, tortor tortor 
                  lacinia metus, ut euismod neque felis eget ipsum 
                  massa nunc. Vestibulum sem mauris, tristique vitae 
                  rhoncus id, fringilla sit amet ligula.
                 </p>
                 <Link to="/products">
                    Go to contact centre
                 </Link>
               </div>
            </div>
        )
    }
}

export default HomePageFourthSection