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
                 <p>We create</p>
                 <p>new technology</p>
                 <p>Aenean sollicitudin, lorem quis bibendum auctor nisi</p>
                 <p>elit consequat ipsum, nec sagittis.</p>
                 <div>
                     <p>
                       Curabitur et ligula. Ut molestie a
                       , ultricies porta urna. Vestibulum 
                       commodo volutpat a, convallis ac
                       , laoreet enim. Phasellus fermentum in
                       , dolor. Pellentesque facilisis. Nulla 
                       imperdiet sit amet magna. Vestibulum 
                       dapibus, mauris nec malesuada fames 
                       ac turpis velit, rhoncus eu.
                     </p>
                     <p>
                       Aenean sollicitudin, lorem quis 
                       bibendum auctor, nisi elit consequat 
                       ipsum, nec sagittis sem nibh id elit. Duis 
                       sed odio sit amet nibh vulputate cursus 
                       a sit amet mauris. Morbi accumsan 
                       ipsum velit. Nam nec tellusin orci enim
                       , luctus et interdum adipiscing wisi.
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