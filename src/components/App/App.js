import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import FairgroundAssetsPage from '../../routes/FairgroundAssetsPage/FairgroundAssetsPage'

class App extends Component {
  render(){
    return(
      <main className='App'>
        <Switch>
          <Route exact path={'/fairground-assets'} component={FairgroundAssetsPage}/>
        </Switch>
      </main>
    )
  }
}

export default App;
