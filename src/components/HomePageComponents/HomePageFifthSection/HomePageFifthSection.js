import React from 'react'
import classes from './HomePageFifthSection.module.css'
import {Link} from 'react-router-dom'

class HomePageFifthSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
             <div>
              
                <p>We make products </p>
                <p>for industries</p>
                <p>With collective experience of over four decades.</p>
                <p>We create value and build confidence and through our years of experience we increase productivity</p>
                {/* <div>
                    <p>  
                      Aenean sollicitudin, lorem quis 
                      bibendum auctor, nisi elit consequat 
                      ipsum, nec sagittis sem nibh id elit. Duis 
                      sed odio sit amet nibh vulputate cursus 
                      a sit amet mauris. Morbi accumsan 
                      ipsum velit. Nam nec tellusin orci enim, 
                      luctus et interdum adipiscing wisi.
                    </p>
                    <p>
                        Curabitur et ligula. Ut molestie a
                        , ultricies porta urna. Vestibulum 
                        commodo volutpat a, convallis ac
                        , laoreet enim. Phasellus fermentum in
                        , dolor. Pellentesque facilisis. Nulla 
                        imperdiet sit amet magna. Vestibulum 
                        dapibus, mauris nec malesuada fames ac.
                    </p>
                </div> */}
             </div>
             <div>
                 <div>
                    <Link to="/about">
                        Read more about us
                    </Link>
                 </div>
             </div>
            </div>
        )
    }
}

export default HomePageFifthSection