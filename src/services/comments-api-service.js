const CommentsApiService = {
    getCommentsByPostId(id){
        return fetch(
            `http://box5462.temp.domains/~arushain/wp-json/wp/v2/comments?post=${id}`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    postComment(postId){
    
        return fetch(`http://box5462.temp.domains/~arushain/wp-json/wp/v2/comments`,{
            method: 'POST',
            body: JSON.stringify({
                'post':1,
                'author_name':'Sophie',
                'author_email':'sophie.summers13@gmail.com',
                'content':'A second test'
            }),
            headers: {
                "content-type":"application/json"/*,
                "authorization": "Bearer 723Ly7DAFwBNBMztCfLvje7PetR5s6rA9ulICYji"*/
            }
        })
            .then(res => 
                 (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    validateToken(){
        return fetch(
            `https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/oauth2/token-info?client_id=68717&token=zELGjjj9q8ZGZJVoyRkGOgX0K4PqJQdEpyLbOsqPThOPpKgfdKZGrT8BwLkELTxy`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    }
}

export default CommentsApiService

/*https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts/${postId}/replies/new*/