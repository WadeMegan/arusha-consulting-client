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
    }
}

export default CommentsApiService

/*https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts/${postId}/replies/new*/

//