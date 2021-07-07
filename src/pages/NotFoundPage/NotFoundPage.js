import React from 'react'
import classes from './NotFoundPage.module.css'

class NotFoundPage extends React.Component{
    render(){
        return(
            <div className={classes.MainContainer}>
              <img 
                className={classes.PageNotFoundImage}
                src='https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1' 
                alt='page-not-found'/>
            </div>
        )
    }
}

export default NotFoundPage