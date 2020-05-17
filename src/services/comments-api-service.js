import config from '../config'

const CommentsApiService = {
    getAllComments(/*id*/){
        return fetch(
            `http://localhost:8070/comments`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postComment(postId, username, content, date, profileImg, replyingTo){
    
        return fetch(`http://localhost:8070/comments`,{
            method: 'POST',
            body: JSON.stringify({
                "fields": {
                    "username": {
                        "en-US": username
                      },
                    "date": {
                        "en-US": date
                      },
                    "content": {
                        "en-US": content
                      },
                    "postId": {
                        "en-US": postId
                      },
                    'profileImg': {
                        "en-US": profileImg
                    },
                    'replyingTo': {
                        "en-US": replyingTo
                    }
                }
            }),
            headers: {
                "content-type":"application/json"
                /*"Content-Type":"application/vnd.contentful.management.v1+json",
                "X-Contentful-Content-Type":"comment"*/
            }
        })
            .then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    publishComment(commentId){
        return fetch(
            `http://localhost:8070/comments/${commentId}`,{
                method: 'PUT'/*,
                headers: {
                    "Authorization": "Bearer CFPAT-pctkH02k_uCe2IikxDgNTmweo9EbnoiW4pszNFTyEFw",
                    "X-Contentful-Version": 1
                }*/
            })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postLike(commentId, userId, postId){
    
        return fetch(/*`https://enigmatic-meadow-02313.herokuapp.com/api/likes`*/"http://localhost:8070/likes",{
            method: 'POST',
            body: JSON.stringify({
                'comment_id':commentId,
                'user_id':userId,
                'post_id':postId
            }),
            headers: {
                //"Authorization": "Bearer 78f18194-fea7-4300-8afc-ba49064ee70f",
                //"Sec-Fetch-Mode": "no-cors",
                "content-type":"application/json"
            }
        })
            .then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    getLikesByPostId(postId){
        return fetch(`http://localhost:8070/likes/posts/${postId}`
            /*`https://enigmatic-meadow-02313.herokuapp.com/api/likes/posts/${postId}`,{
                headers: {
                    "Authorization": `Bearer 78f18194-fea7-4300-8afc-ba49064ee70f`
                }
            }*/)
                .then(res=>
                    /*(res.error==="Unauthorized request")
                        ? res.json().then(e=>{
                            throw new Error(e)
                        })
                        : res.json()*/
                    
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )/*
                .then(json=>{
                    (json.error)
                        ? json.json().then(e=>{
                            throw new Error(e)
                        })
                        : json.json()
                    console.log(json)
                })*/
    },
    deleteLike(commentId, userId){
    
        return fetch(`http://localhost:8070/likes/comments/${commentId}/users/${userId}`,{
            method: 'DELETE',
            /*headers: {
                "Authorization": "Bearer 78f18194-fea7-4300-8afc-ba49064ee70f"
            }*/
        })
            
            /*.then(res => 
                 console.log(res)
            )*/
    },
}

export default CommentsApiService

/*https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts/${postId}/replies/new*/

//