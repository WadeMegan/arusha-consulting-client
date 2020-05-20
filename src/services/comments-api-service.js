import config from '../config'

const CommentsApiService = {
    getAllComments(/*id*/){
        return fetch(
            `${config.API_ENDPOINT}/comments`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postComment(postId, username, content, date, profileImg, replyingTo){
    
        return fetch(`${config.API_ENDPOINT}/comments`,{
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
            `${config.API_ENDPOINT}/comments/${commentId}`,{
                method: 'PUT'
            })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postLike(commentId, userId, postId){
    
        return fetch(`${config.API_ENDPOINT}/likes`,{
            method: 'POST',
            body: JSON.stringify({
                'comment_id':commentId,
                'user_id':userId,
                'post_id':postId
            }),
            headers: {
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
        return fetch(`${config.API_ENDPOINT}/likes/posts/${postId}`)
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    deleteLike(commentId, userId){
    
        return fetch(`${config.API_ENDPOINT}/likes/comments/${commentId}/users/${userId}`,{
            method: 'DELETE'
        })
            

    },
}

export default CommentsApiService

