import React from 'react'
import classes from './AboutPageThirdSection.module.css'
import {Link} from 'react-router-dom'

class AboutPageThirdSection extends React.Component{
    render(){
        return(
            <div className={classes[this.props.mainContainerClass]}>
              <p>Become our partner</p>
              <p>Psum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit</p>
              <Link to='/contact'>
                <button>Go to contact</button>
              </Link>
            </div>
        )
    }
}

export default AboutPageThirdSection