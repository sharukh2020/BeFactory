import React from 'react'
import classes from './HomePageThirdSection.module.css'
import {Link} from 'react-router-dom'
import Image1 from '../../../assets/home_factory_icon_3.png'
import Image2 from '../../../assets/home_factory_icon_2.png'
import Image3 from '../../../assets/home_factory_icon_5.png'
import Image4 from '../../../assets/home_factory_icon_1.png'

class HomePageThirdSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardsArr:[
                {
                    cardId:1,
                    imageAdress:Image1,
                    cardHeading:'P1',
                    cardText:'Pellentesque a fermentum dui; sit amet dapibus nulla. Quisque vel hendrerit leo. Donec euismod commodo dui at lobortis. Integer ornare pellentesque leo posuere'
                },
                {
                    cardId:2,
                    imageAdress:Image2,
                    cardHeading:'P2',
                    cardText:'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies.'
                },
                {
                    cardId:3,
                    imageAdress:Image3,
                    cardHeading:'P3',
                    cardText:'Pellentesque a fermentum dui; sit amet dapibus nulla. Quisque vel hendrerit leo. Donec euismod commodo dui at lobortis. Integer ornare pellentesque leo posuere.'
                },
                {
                    cardId:4,
                    imageAdress:Image4,
                    cardHeading:'P4',
                    cardText:'Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus.'
                },
                {
                    cardId:5,
                    imageAdress:Image2,
                    cardHeading:'P5',
                    cardText:'Pellentesque a fermentum dui; sit amet dapibus nulla. Quisque vel hendrerit leo. Donec euismod commodo dui at lobortis. Integer ornare pellentesque leo posuere.'
                }
            ]
        }
    }
    render(){
        const cards=this.state.cardsArr.map((item,pos)=>{
            const createClass=()=>{
                if((Number(pos)+1)%2===0){
                    return 'EvenCard'
                }
                else{
                    return 'OddCard'
                }
            }
            return(
                <Link to='/products' key={item.cardId}>
                    <div className={[classes.Cards,classes[createClass()]].join(' ')} >
                        <img src={item.imageAdress} alt="tool"/>
                        <p>{item.cardHeading}</p>
                        <p>{item.cardText}</p>
                    </div>
                </Link>
            )
        })
        return(
            <div className={classes.MainContainer}>
               {cards}
            </div>
        )
    }
}

export default HomePageThirdSection