import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App'
import { PostsListProvider } from './contexts/PostsListContext'
//import { usePromiseTracker } from "react-promise-tracker";

/*const LoadingIndicator = props => {

  const { promiseInProgress } = usePromiseTracker()

  return (
    promiseInProgress &&
    <p>Hey, something is loading!</p>
  )
}*/

ReactDOM.render(
  <BrowserRouter>
    <PostsListProvider>
      <App/>
      {/*<LoadingIndicator/>*/}
    </PostsListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);