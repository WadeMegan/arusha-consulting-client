import React, { Component } from 'react'

const PostsListContext = React.createContext({
    postsList: [],
    setPostsList: ()=>{},
    hello: ()=>{},

    currentPost: [],
    setCurrentPost: ()=>{}
})

export default PostsListContext

export class PostsListProvider extends Component {
    state={
        postsList: [],
        currentPost: [],
    }

    hello = () => {
        console.log('hello ran')
    }

    setPostsList = postsList => {
        this.setState({
            postsList: postsList,
        })
    }

    setCurrentPost = currentPost => {
        this.setState({
            currentPost: currentPost,
        })
    }

    render(){
        const value={
            postsList: this.state.postsList,
            setPostsList: this.setPostsList,
            hello: this.hello,
            currentPost: this.state.currentPost,
            setCurrentPost: this.setCurrentPost
        }

        return (
            <PostsListContext.Provider value={value}>
                {this.props.children}
            </PostsListContext.Provider>
        )
    }

}