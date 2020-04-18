import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App'
import { PostsListProvider } from './contexts/PostsListContext'

ReactDOM.render(
  <BrowserRouter>
    <PostsListProvider>
      <App />
    </PostsListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);