import React from 'react';
import classes from './HomePageFirstSection.module.css';
import {Link} from 'react-router-dom'

class HomePageFirstSection extends React.Component{
  render(){
   return(
    <div className={classes.MainContainer}>
      <div className={classes.FirstSection}>
          <div className={classes.Introtext}>
             <p>IT'S</p>
             <p>WHERE ALL</p>
             <p>BEGINS</p>
          </div>
          <Link to='/about'>
               <button className={classes.IntroBtn}>Discover our technology</button>
          </Link>
      </div>
      <div className={classes.SecondSection}>
         <div className={classes.upperSection}>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet 
              mauris. Morbi accumsan ipsum velit.
         </div>
         <div className={classes.LowerSection}>
           
         </div>
      </div>
    </div>
   )
  }
}

export default HomePageFirstSection;
