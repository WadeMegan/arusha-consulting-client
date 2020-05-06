import React, { Component } from 'react'

const PostsListContext = React.createContext({
    postsList: [],
    setPostsList: ()=>{},

    currentPost: [],
    setCurrentPost: ()=>{},

    commentsList: [],
    setCommentsList: ()=>{},

    assetsList: [],
    setAssetsList: ()=>{},

    userLoggedIn: null,
    usersName: null,
    usersEmail: null,
    usersProfileImg: null
})

export default PostsListContext

export class PostsListProvider extends Component {
    state={
        postsList: [],
        currentPost: [],
        userLoggedIn: null,
        usersName: null,
        usersEmail: null,
        usersProfileImg: null
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

    setAssetsList = assetsList => {
        this.setState({
            assetsList: assetsList,
        })
    }

    setUserLoggedIn = () => {
        this.setState({
            userLoggedIn: true
        })
    }

    setUsersName = usersName => {
        this.setState({
            usersName: usersName
        })
    }

    setUsersEmail = usersEmail => {
        this.setState({
            usersEmail: usersEmail
        })
    }

    setUsersProfileImg = usersProfileImg => {
        this.setState({
            usersProfileImg: usersProfileImg
        })
    }

    render(){
        const value={
            postsList: this.state.postsList,
            setPostsList: this.setPostsList,
            currentPost: this.state.currentPost,
            setCurrentPost: this.setCurrentPost,
            commentsList: this.state.commentsList,
            setCommentsList: this.setCommentsList,
            assetsList: this.state.assetsList,
            setAssetsList: this.setAssetsList,

            userLoggedIn: this.state.userLoggedIn,
            setUserLoggedIn: this.setUserLoggedIn,
            usersName: this.state.usersName,
            setUsersName: this.setUsersName,
            usersEmail: this.state.usersEmail,
            setUsersEmail: this.setUsersEmail,
            usersProfileImg: this.state.usersProfileImg,
            setUsersProfileImg: this.setUsersProfileImg

        }

        return (
            <PostsListContext.Provider value={value}>
                {this.props.children}
            </PostsListContext.Provider>
        )
    }

}