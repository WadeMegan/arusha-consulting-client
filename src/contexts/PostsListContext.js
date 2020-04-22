import React, { Component } from 'react'

const PostsListContext = React.createContext({
    postsList: [],
    setPostsList: ()=>{},
    hello: ()=>{},

    currentPost: [],
    setCurrentPost: ()=>{},

    commentsList: [],
    setCommentsList: ()=>{}
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

    setCommentsList = commentsList => {
        this.setState({
            commentsList: commentsList,
        })
    }

    render(){
        const value={
            postsList: this.state.postsList,
            setPostsList: this.setPostsList,
            hello: this.hello,
            currentPost: this.state.currentPost,
            setCurrentPost: this.setCurrentPost,
            commentsList: this.state.commentsList,
            setCommentsList: this.setCommentsList,
        }

        return (
            <PostsListContext.Provider value={value}>
                {this.props.children}
            </PostsListContext.Provider>
        )
    }

}