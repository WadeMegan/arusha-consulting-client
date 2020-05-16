import config from '../config'

const CommentsApiService = {
    getAllComments(id){
        return fetch(
            `https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/entries?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM&content_type=comment`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postComment(postId, username, content, date, profileImg, replyingTo){
    
        return fetch(`https://api.contentful.com/spaces/cvysyefe75et/environments/master/entries?access_token=CFPAT-pctkH02k_uCe2IikxDgNTmweo9EbnoiW4pszNFTyEFw`,{
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
                "Content-Type":"application/vnd.contentful.management.v1+json",
                "X-Contentful-Content-Type":"comment"
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
            `https://api.contentful.com/spaces/cvysyefe75et/environments/master/entries/${commentId}/published`,{
                method: 'PUT',
                headers: {
                    "Authorization": "Bearer CFPAT-pctkH02k_uCe2IikxDgNTmweo9EbnoiW4pszNFTyEFw",
                    "X-Contentful-Version": 1
                }
            })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postLike(commentId, userId, postId){
    
        return fetch(`https://enigmatic-meadow-02313.herokuapp.com/api/likes`,{
            method: 'POST',
            body: JSON.stringify({
                'comment_id':commentId,
                'user_id':userId,
                'post_id':postId
            }),
            headers: {
                "Authorization": "Bearer 78f18194-fea7-4300-8afc-ba49064ee70f",
                "Sec-Fetch-Mode": "no-cors",
                "content-type":"application/json"
            }
        })
            .then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    /*getLikesByCommentId(commentId){
        return fetch(
            `http://localhost:8060/api/likes/comments/${commentId}`,{
                headers: {
                    "Authorization": "Bearer 78f18194-fea7-4300-8afc-ba49064ee70f"
                }
            })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },*/
    getLikesByPostId(postId){
        return fetch(
            `${config.HEROKU_API_URL}/likes/posts/${postId}`,{
                headers: {
                    "Authorization": `Bearer ${config.HEROKU_API_TOKEN}`
                }
            })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    deleteLike(commentId, userId){
    
        return fetch(`https://enigmatic-meadow-02313.herokuapp.com/api/likes/comments/${commentId}/users/${userId}`,{
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer 78f18194-fea7-4300-8afc-ba49064ee70f"
            }
        })
            /*.then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )*/
    },
    /*updateLikedBy(commentId, username, date, content, postId, profileImg, replyingTo, likedBy, commentVersion){
        return fetch(`https://api.contentful.com/spaces/cvysyefe75et/environments/master/entries/${commentId}`,{
            method: 'PUT',
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
                    },
                    "likedBy": {
                        "en-US": likedBy
                    }
                }
            }),
            headers: {
                //"Content-Type":"application/vnd.contentful.management.v1+json",
                //"X-Contentful-Content-Type":"comment",
                "Authorization": "Bearer CFPAT-pctkH02k_uCe2IikxDgNTmweo9EbnoiW4pszNFTyEFw",
                "X-Contentful-Version": 13
            }
        })
            .then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },*/
}

export default CommentsApiService

/*https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts/${postId}/replies/new*/

//