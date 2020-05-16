import React, {Component} from 'react'
import './Error.css'
import PostsListContext from '../../contexts/PostsListContext'
import { Link } from 'react-router-dom'

// Error boundary
class Error extends Component {
    static contextType = PostsListContext

    render(){
      if(this.context.error !==null){
        return(
           <div className='errorBoundaryMessage'>
               <h1>Oops, something's gone wrong!</h1>
                <p>Not to worry, why don't you try one of these helpful links:</p>
                <div className='errorBoundaryButtons'>
                   <Link to='/about'>Home</Link>
                    <Link to='/fairground'>Blog</Link> 
                    <Link to='/fairground-assets'>Assets</Link>
                </div>
                
           </div>
        )
      }
      return this.props.children 
    }
}

export default Error