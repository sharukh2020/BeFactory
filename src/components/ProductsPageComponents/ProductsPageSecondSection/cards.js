import { cardsArr } from "./cardsArr";
import classes from './cards.module.css'
import CardIcon from '../../../assets/products_page_card_icon.png'

export const cards=cardsArr.map((item,pos)=>{
    const subCards=item.subCardsArr.map((elem,place)=>{
        return(
            <div className={classes.SubCards} key={place}>
             <div className={classes.LeftImageSection}>
              <img 
                alt="icon"
                className={classes.LeftImage}
                src={CardIcon}/>
             </div>
             <div className={classes.RightTextSection}>
                <p className={classes.SubCardHeading}>
                    {elem.subCardHeading}
                </p>
                <p className={classes.SubCardTextContent}>
                    {elem.subCardTextContent}
                </p>
             </div>
            </div>
        )
    })
    return(
        <div className={classes.Cards} key={pos}>
          <div className={classes.LeftSection}>
            <img 
             alt='products'
             className={classes.LeftSectionImage}
             src={item.leftImgAdress}
             />
          </div>
          <div className={classes.RightSection}>
            <div className={classes.UpperSection}>
              <span className={classes.CardName}>{item.cardName}</span>
              <span className={classes.CardHeading}>{item.cardHeading}</span>
              <div className={classes.CardTextContent}>
                  {item.cardTextContent}
              </div>
            </div>
            <div className={classes.LowerSection}>
              {subCards}
            </div>
          </div>
        </div>
    )
})