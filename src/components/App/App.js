import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import FairgroundAssetsPage from '../../routes/FairgroundAssetsPage/FairgroundAssetsPage'
import BlogPage from '../../routes/BlogPage/BlogPage'
import SocialMedia from '../SocialMedia/SocialMedia'
import IndividualPostPage from '../../routes/IndividualPostPage/IndividualPostPage'

class App extends Component {
  render(){
    return(
        <main className='App'>
        <SocialMedia/>
        <Switch>
          <Route exact path={'/fairground/assets'} component={FairgroundAssetsPage}/>
          <Route exact path={'/fairground'} component={BlogPage}/>
          <Route path={'/fairground/posts/:id'} render={(props)=> <IndividualPostPage {...props}/>}/>
        </Switch>
      </main>      
    )
  }
}

export default App;
