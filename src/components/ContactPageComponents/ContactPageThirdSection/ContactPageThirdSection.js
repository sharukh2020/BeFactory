import React from 'react'
import { cards } from './cards'
import classes from './ContactPageThirdSection.module.css'

class ContactPageThirdSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
             <div className={classes.LeftSection}>
                <p className={classes.Adresses}>Addresses</p>
                <div className={classes.CardsContainer}>
                   {cards}
                </div>
             </div>
             <div className={classes.RightSection}>
               <p className={classes.Heading}>Questions? Write us!</p>
               <p className={classes.TextContent}>
                 Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
               </p>
               <form className={classes.Form}>
                <div className={classes.FirstInputContainer}>
                  <input type='text' name="name" placeholder="Your name"/>
                  <input type='text' name="email" placeholder="Your e-mail"/>
                </div>
                <div className={classes.SecondInputContainer}>
                  <input type='text' name="subject" placeholder="Subject"/>
                  <textarea className={classes.TextArea} defaultValue="Message">
                  
                 </textarea>
                </div>
                <div className={classes.SubmitInputContainer}>
                  <input type='submit' value='Send Message'/>
                </div>
               </form>
             </div>
            </div>
        )
    }
}
 
export default ContactPageThirdSection