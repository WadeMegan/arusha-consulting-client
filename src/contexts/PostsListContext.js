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
    usersProfileImg: null,
    usersId:null,

    currentLikesList: [],
    setCurrentLikesList: ()=>{},

    //error handling
    error: null,
    setError: ()=>{},
    clearError: ()=>{},

    featuredSponsor: null,
    setFeaturedSponsor:()=>{},
    sponsorMedia: null,
    setSponsorMedia: ()=>{}
})

export default PostsListContext

export class PostsListProvider extends Component {
    state={
        postsList: [],
        currentPost: [],
        userLoggedIn: null,
        usersName: null,
        usersEmail: null,
        usersProfileImg: null,
        usersId:null,
        currentLikesList: null,
        error:null,
        featuredSponsor: null,
        sponsorMedia: null,
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

    setUsersId = id => {
        this.setState({
            usersId: id
        })
    }

    setCurrentLikesList = list =>{
        this.setState({
            currentLikesList:list
        })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setFeaturedSponsor = sponsor =>{
        this.setState({
            featuredSponsor:sponsor
        })
    }

    setSponsorMedia = media =>{
        this.setState({
            sponsorMedia:media
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
            setUsersProfileImg: this.setUsersProfileImg,
            usersId: this.state.usersId,
            setUsersId: this.setUsersId,

            currentLikesList: this.state.currentLikesList,
            setCurrentLikesList: this.setCurrentLikesList,

            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,

            featuredSponsor: this.state.featuredSponsor,
            setFeaturedSponsor: this.setFeaturedSponsor,
            sponsorMedia: this.state.sponsorMedia,
            setSponsorMedia: this.setSponsorMedia,

        }

        return (
            <PostsListContext.Provider value={value}>
                {this.props.children}
            </PostsListContext.Provider>
        )
    }

}