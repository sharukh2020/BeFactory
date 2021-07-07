import React from 'react'
import classes from './ProductsPageSecondSection.module.css'
import {cards} from './cards'

class ProductsPageSecondSection extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
                {cards}
            </div>
        )
    }
}

export default ProductsPageSecondSection