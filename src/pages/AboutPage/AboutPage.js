import React from 'react'
import classes from './AboutPage.module.css'
import Topbar from '../../components/Topbar/Topbar';
import AboutPageFirstSection from '../../components/AboutPageComponents/AboutPageFirstSection/AboutPageFirstSection';
import AboutPageSecondSection from '../../components/AboutPageComponents/AboutPageSecondSection/AboutPageSecondSection';
import AboutPageThirdSection from '../../components/AboutPageComponents/AboutPageThirdSection/AboutPageThirdSection';

class AboutPage extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
               <Topbar/>
               <AboutPageFirstSection
                    mainContainerClass={'MainContainerA'}
                    upperSectionClass={'UpperSectionA'}
                    upperSectionInnerContent={'MACHINING MADE EASY'}
                    lowerSectionClass={'LowerSectionA'}
                    leftSectionClass={'LeftSectionA'}
                    imageClass={'ImageA'}
                    textContent={'Donec facilisis, ex non facilisis lobortis, augue neque euismod lectus, a semper urna lectus quis odio. Quisque quis dignissim quam. Nunc in odio lectus nullam. Aenean suscipit nisl nisl, a molestie purus faucibus elementum.'}
                    rightSectionClass={'RightSectionA'}
               />
               <AboutPageSecondSection/>
               <AboutPageThirdSection
                    mainContainerClass={'MainContainerA'}
               />
            </div>
        )
    }
}

export default AboutPage