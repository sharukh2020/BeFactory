import { cardsArr } from "./cardsArr";
import classes from './cards.module.css'

const socialIconsArr=["fas fa-envelope","fab fa-facebook-f","fab fa-twitter","fab fa-linkedin-in"]

const socialIcons=socialIconsArr.map((item,pos)=>{
    return(
        <div className={classes.SocialIconCards} key={Number(pos)+1}>
           <i className={item}></i>
        </div>
    )
})

export const cards=cardsArr.map((item,pos)=>{
    return(
        <div className={classes.Cards} key={item.cardId}>
            <img
              className={classes.Image}
              src={item.imageAdress}
              alt='person'
            />
            <div className={classes.Name}>
              {item.name}
            </div>
            <div className={classes.Designation}>
              {item.designation}
            </div>
            <div className={classes.BorderBottom}>

            </div>
            <div className={classes.TextContent}>
               {item.textContent}
            </div>
            <div className={classes.SocialIcons}>
               {socialIcons}
            </div>
        </div>
    )
})