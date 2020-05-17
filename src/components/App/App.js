import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import FairgroundAssetsPage from '../../routes/FairgroundAssetsPage/FairgroundAssetsPage'
import BlogPage from '../../routes/BlogPage/BlogPage'
import SocialMedia from '../SocialMedia/SocialMedia'
import IndividualPostPage from '../../routes/IndividualPostPage/IndividualPostPage'
import AboutPage from '../../routes/AboutPage/AboutPage'
import NavBar from '../NavBar/NavBar'
import ContactPage from '../../routes/ContactPage/ContactPage'
import HomePage from '../../routes/HomePage/HomePage'

class App extends Component {
  render(){
    console.log(process.env.REACT_APP_HEROKU_API_URL)
    return(
        <>
        <NavBar/>
        <main className='App'>
          <SocialMedia/>
            <Switch>
              <Route exact path={'/'} component={HomePage}/>
              <Route path={'/fairground-assets'} component={FairgroundAssetsPage}/>
              <Route exact path={'/blog'} component={BlogPage}/>
              <Route path={'/blog/:title'} render={(props)=> <IndividualPostPage {...props}/>}/>
              <Route path={'/about'} component={AboutPage}/>
              <Route path={'/contact'} component={ContactPage}/>
              {/*<Route path={"*"} component={FairgroundAssetsPage} />*/}
            </Switch>
        </main>    
        </>  
    )
  }
}

export default App;
