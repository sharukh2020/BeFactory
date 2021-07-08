import React from 'react';
import classes from './HomePage.module.css';
import Topbar from '../../components/Topbar/Topbar';
import HomePageFirstSection from '../../components/HomePageComponents/HomePageFirstSection/HomePageFirstSection'
import HomePageSecondSection from '../../components/HomePageComponents/HomePageSecondSection/HomePageSecondSection'
import HomePageThirdsection from '../../components/HomePageComponents/HomePageThirdSection/HomePageThirdSection'
// import HomePageFourthSection from '../../components/HomePageComponents/HomePageFourthSection/HomePageFourthSection'
import HomePageFifthSection from '../../components/HomePageComponents/HomePageFifthSection/HomePageFifthSection'
class HomePage extends React.Component{
  render(){
   return(
      <div className={classes.MainContainer}>
         <Topbar/>
         <HomePageFirstSection/>
         <HomePageSecondSection/>
         <HomePageThirdsection/>
         {/* <HomePageFourthSection/> */}
         <HomePageFifthSection/>
     </div>
   )
  }
}

export default HomePage;
