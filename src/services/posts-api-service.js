const PostsApiService = {
    
    getPosts(){
        return fetch(
        "http://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts"
        )
            .then(res=>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }, 
    getPostById(id){
        return fetch(
            `http://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts/${id}`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    }

}

export default PostsApiService