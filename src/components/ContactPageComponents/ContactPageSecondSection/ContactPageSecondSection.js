import React from 'react'
import { cards } from './cards'
import classes from './ContactPageSecondSection.module.css'

class ContactPageSecondSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
              <div className={classes.LeftSection}>
                <p>Quick contact</p>
                <p>centre</p>
              </div>
              <div className={classes.RightSection}>
                {cards}
              </div>
            </div>
        )
    }
}

export default ContactPageSecondSection