import React from 'react'
import classes from './ProductsPage.module.css'
import Topbar from '../../components/Topbar/Topbar'
import ProductsPageFirstSection from '../../components/ProductsPageComponents/ProductsPageFirstSection/ProductsPageFirstSection'
import ProductsPageSecondSection from '../../components/ProductsPageComponents/ProductsPageSecondSection/ProductsPageSecondSection'
import ProductsPageThirdSection from '../../components/ProductsPageComponents/ProductsPageThirdSection/ProductsPageThirdSection'

class ProductsPage extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer} id='main-container'>
              <Topbar/>
              <ProductsPageFirstSection/>
              <ProductsPageSecondSection/>
              <ProductsPageThirdSection/>
            </div>
        )
    }
}

export default ProductsPage