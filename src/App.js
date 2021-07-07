import React from 'react';
import classes from './App.module.css';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

class App extends React.Component{
  render(){
   return(
     <BrowserRouter>
         <div className={classes.App}>
            <Switch>
              <Route path='/about' component={AboutPage}/>
              <Route path='/products' component={ProductsPage}/>
              <Route path='/contact' component={ContactPage}/>
              <Route exact path='/' component={HomePage}/>
              <Route component={NotFoundPage}/>
              <Route render={()=>{<Redirect to='/not-found'/>}}/>
            </Switch>
         </div>
     </BrowserRouter>
   )
  }
}

export default App;
