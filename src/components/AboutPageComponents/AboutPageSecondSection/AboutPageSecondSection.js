import React from 'react'
import classes from './AboutPageSecondSection.module.css'
import CarImage from '../../../assets/about_page_car_photo.jpg'

class AboutPageSecondSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardsArr:[
                {
                    cardId:1,
                    mainHeading:'How it was on the beginning',
                    subHeading:'Sed id nisi lectus! Fusce ac magna gravida, tincidunt ipsum ac malesuada ante! Nam vel facilisis neque.',
                    sectionOne:CarImage,
                    sectionTwo:'Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Telis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat velit.',
                    sectionThree:'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.',
                    sectionFour:'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.'
                },
                {
                    cardId:2,
                    mainHeading:'We provide simple solutions to make life easier',
                    subHeading:'Sed id nisi lectus! Fusce ac magna gravida, tincidunt ipsum ac malesuada ante! Nam vel facilisis neque.',
                    sectionOne:'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.',
                    sectionTwo:'Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.',
                    sectionThree:'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
                    sectionFour:null
                }
            ]
        }
    }
    render(){
        let cards=this.state.cardsArr.map((item,pos)=>{
            let firstTextSection=()=>{
                if(item.sectionFour===null){
                   return(
                       <div className={classes.TextSections}>
                          {item.sectionOne}
                       </div>
                   )
                }
                else{
                    return(
                        <img alt='car' src={item.sectionOne} className={classes.TextSectionImage}/>
                    )
                }
            }
            return(
                <div className={classes.Cards} key={item.cardId}>
                   <p className={classes.Heading}>{item.mainHeading}</p>
                   <p className={classes.SubHeading}>{item.subHeading}</p>
                   <div className={classes.TextSectionsContainers}>
                       <div className={classes.LeftContainer}>
                          {firstTextSection()}
                          <div className={classes.TextSections}>
                            {item.sectionTwo}
                          </div>
                       </div>
                       <div className={classes.RightContainer}>
                          <div className={classes.TextSections}>
                            {item.sectionThree}
                          </div>
                          <div className={classes.TextSections}>
                            {item.sectionFour}
                          </div>
                       </div>
                   </div>
                </div>
            )
        })
        return(
            <div className={classes.MainContainer}>
               {cards}
            </div>
        )
    }
}

export default AboutPageSecondSection