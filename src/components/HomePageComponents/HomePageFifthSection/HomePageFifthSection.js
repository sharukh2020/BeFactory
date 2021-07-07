import React from 'react'
import classes from './HomePageFifthSection.module.css'
import {Link} from 'react-router-dom'

class HomePageFifthSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
             <div>
                <p>We make car</p>
                <p>elements since 1935</p>
                <p>Aenean sollicitudin, lorem quis bibendum auctor nisi elit</p>
                <p>consequat ipsum, nec sagittis.</p>
                <div>
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
                </div>
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