import React from 'react'
import AboutPageFirstSection from '../../AboutPageComponents/AboutPageFirstSection/AboutPageFirstSection'

class ContactPageFirstSection extends React.Component{
    render(){
        return(
            <AboutPageFirstSection
                 mainContainerClass={'MainContainerC'}
                 upperSectionClass={'UpperSectionC'}
                 upperSectionInnerContent={'CONTACT'}
                 lowerSectionClass={'LowerSectionC'}
            />
        )
    }
}

export default ContactPageFirstSection