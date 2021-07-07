import { cardsArr } from "./cardsArr";
import classes from './cards.module.css'

export const cards=cardsArr.map((item,pos)=>{
    return(
        <div className={classes.Cards} key={item.cardId}>
         <div className={classes.LeftSection}>
           <img 
            alt='location'
            src="http://be.beantownthemes.com/html/content/factory/images/home_factory_pin.png"
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