import { cardsArr } from "./cardsArr";
import classes from './cards.module.css'
import CardIcon from '../../../assets/contact_page_card_icon.png'

export const cards=cardsArr.map((item,pos)=>{
    return(
        <div className={classes.Cards} key={item.cardId}>
         <div className={classes.LeftSection}>
           <img 
            alt='location'
            src={CardIcon}
            className={classes.Image}/>
         </div>
         <div className={classes.RightSection}>
           <p className={classes.AdressName}>{item.adressName}</p>
           <p className={classes.DetailedAdress}>{item.detailedAdress}</p>
           <p className={classes.PhoneNumber}>{item.phoneNumber}</p>
           <p className={classes.Email}>{item.email}</p>
         </div>
        </div>
    )
})