import React from 'react'
import classes from './ContactPage.module.css'
import Topbar from '../../components/Topbar/Topbar'
import ContactPageFirstSection from '../../components/ContactPageComponents/ContactPageFirstSection/ContactPageFirstSection'
import ContactPageSecondSection from '../../components/ContactPageComponents/ContactPageSecondSection/ContactPageSecondSection'
import ContactPageThirdSection from '../../components/ContactPageComponents/ContactPageThirdSection/ContactPageThirdSection'

class ContactPage extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
              <Topbar/>
              <ContactPageFirstSection/>
              <ContactPageSecondSection/>
              <ContactPageThirdSection/>
            </div>
        )
    }
}

export default ContactPage