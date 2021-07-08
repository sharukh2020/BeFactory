import React from 'react';
import classes from './HomePageFirstSection.module.css';
import {Link} from 'react-router-dom'

class HomePageFirstSection extends React.Component{
  render(){
   return(
    <div className={classes.MainContainer}>
      <div className={classes.FirstSection}>
          <div className={classes.Introtext}>
             <p>MACHINING</p>
             <p>MADE</p>
             <p>EASY</p>
          </div>
          <Link to='/about'>
               <button className={classes.IntroBtn}>Discover our technology</button>
          </Link>
      </div>
      <div className={classes.SecondSection}>
         <div className={classes.upperSection}>
           We are experienced work-lovers focused on Quality &amp; Customer Satisfaction. We are an ISO 9001: 2015
           certified company.
         </div>
         <div className={classes.LowerSection}>
           
         </div>
      </div>
    </div>
   )
  }
}

export default HomePageFirstSection;
