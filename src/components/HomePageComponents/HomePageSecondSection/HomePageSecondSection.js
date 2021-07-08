import React from 'react'
import classes from './HomePageSecondSection.module.css'
import {Link} from 'react-router-dom'

class HomePageSecondSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
              <div className={classes.LeftSection}>

              </div>
               <div className={classes.RightSection}>
                 <p>Product Engineering</p>
                 <p>Services</p>
                 <p>We are experts when it comes to CNC</p>
                 <div>
                     <p>
                      Build Future-Proof Products with 
                      Innovative Engineering Services· 
                      We Deliver end-to-end Product Engineering 
                      Solutions to meet the unique needs of a variety 
                      of industries and customers around the world
                     </p>
                 </div>
                 <Link to='/products'>
                   <button>Go to products</button>
                 </Link>
               </div>
            </div>
        )
    }
}

export default HomePageSecondSection