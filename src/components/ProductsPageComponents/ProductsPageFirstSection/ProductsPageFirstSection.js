import React from 'react'
import AboutPageFirstSection from '../../AboutPageComponents/AboutPageFirstSection/AboutPageFirstSection'

class ProductsPageFirstSection extends React.Component{
    render(){
        return(
            <AboutPageFirstSection
                 mainContainerClass={'MainContainerB'}
                 upperSectionClass={'UpperSectionB'}
                 upperSectionInnerContent={'PRODUCTS'}
                 lowerSectionClass={'LowerSectionB'}
                 leftSectionClass={'LeftSectionB'}
                 imageClass={'ImageB'}
                 textContent={'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'}
                 rightSectionClass={'RightSectionB'}
            />
        )
    }
}

export default ProductsPageFirstSection