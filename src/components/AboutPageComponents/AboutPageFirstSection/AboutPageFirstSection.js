import React from 'react'
import classes from './AboutPageFirstSection.module.css'
import AboutImage from '../../../assets/about_page_about_icon.png'

class AboutPageFirstSection extends React.Component{
    render(){
        return(
            <div className={classes[this.props.mainContainerClass]}>
              <div className={classes[this.props.upperSectionClass]}>
                 <p>{this.props.upperSectionInnerContent}</p>
              </div>
              <div className={classes[this.props.lowerSectionClass]}>
                <div className={classes[this.props.leftSectionClass]}>
                    <img 
                    alt='about'
                    className={classes[this.props.imageClass]}
                    src={AboutImage}/>
                    <p className={classes.TextContent}>
                        {this.props.textContent}
                    </p>
                </div>
                <div className={classes[this.props.rightSectionClass]}>

                </div>
              </div>
            </div>
        )
    }
}

export default AboutPageFirstSection