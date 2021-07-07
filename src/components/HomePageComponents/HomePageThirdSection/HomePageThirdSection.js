import React from 'react'
import classes from './HomePageThirdSection.module.css'
import {Link} from 'react-router-dom'

class HomePageThirdSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardsArr:[
                {
                    cardId:1,
                    imageAdress:'http://be.beantownthemes.com/html/content/factory/images/home_factory_icon_3.png',
                    cardHeading:'Aenean sollicitudin lorem quis bibendum',
                    cardText:'Pellentesque a fermentum dui; sit amet dapibus nulla. Quisque vel hendrerit leo. Donec euismod commodo dui at lobortis. Integer ornare pellentesque leo posuere'
                },
                {
                    cardId:2,
                    imageAdress:'http://be.beantownthemes.com/html/content/factory/images/home_factory_icon_2.png',
                    cardHeading:'In quis placerat leo metus nullam efficitur est metus',
                    cardText:'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies.'
                },
                {
                    cardId:3,
                    imageAdress:'http://be.beantownthemes.com/html/content/factory/images/home_factory_icon_5.png',
                    cardHeading:'Praesent volutpat volutpat morbi gravida orci aliquam',
                    cardText:'Pellentesque a fermentum dui; sit amet dapibus nulla. Quisque vel hendrerit leo. Donec euismod commodo dui at lobortis. Integer ornare pellentesque leo posuere.'
                },
                {
                    cardId:4,
                    imageAdress:'http://be.beantownthemes.com/html/content/factory/images/home_factory_icon_1.png',
                    cardHeading:'Dapibus risus ante sodales lectus blandit eu tempor diam',
                    cardText:'Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus.'
                },
                {
                    cardId:5,
                    imageAdress:'http://be.beantownthemes.com/html/content/factory/images/home_factory_icon_2.png',
                    cardHeading:'Aenean sollicitudin lorem quis bibendum',
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