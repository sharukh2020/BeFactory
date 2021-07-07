import React from 'react';
import classes from './Topbar.module.css';
import {Link} from "react-router-dom"

class Topbar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pageLinksNameArr:[
        {
          linkName:"HOME",
          path:'/'
        },
        {
          linkName:"ABOUT FACTORY",
          path:'/about'
        },
        {
          linkName:"PRODUCTS",
          path:'/products'
        },
        {
          linkName:"CONTACT US",
          path:'/contact'
        }
      ],
      linksContainerState:'hidden'
    }
  }
  animationOfLinksContainer=()=>{
    const linksContainer=document.getElementById('page-links-container-b')
    if(this.state.linksContainerState==='hidden'){
      linksContainer.className=classes.linksContainerB
      this.setState({linksContainerState:'visible'})
    }
    else{
      linksContainer.className=classes.linksContainerC
      this.setState({linksContainerState:'hidden'})
    }
  }
  render(){
   const pageLinks=this.state.pageLinksNameArr.map((item,pos)=>{
     return(
      <div className={classes.PageLinks} key={pos}>
        <Link to={item.path}>
           {item.linkName}
        </Link>
      </div>
     )
   })
   return(
    <div className={classes.MainContainer}>
        <div className={classes.SubContainerA}>
          <div className={classes.LogoContainer}>
            <span className={classes.LogoFirstPart}>Be</span>
            <span className={classes.LogoSecondPart}>FACTORY</span>
          </div> 
          <div className={classes.PageLinksContainer}>
            {pageLinks}
          </div>
          <div className={classes.PageLinksContainerB}>
             <i 
               className="fas fa-bars"
               onClick={()=>{this.animationOfLinksContainer()}}
              >
              </i>
             <div className={classes.linksContainer}  id='page-links-container-b'>
              {pageLinks}
             </div>
          </div>
        </div>
        <div className={classes.SubContainerB}>

        </div>
    </div>
   )
  }
}

export default Topbar;
