const PostsApiService = {
    
    getPosts(){
        return fetch(
            "http://box5462.temp.domains/~arushain/wp-json/wp/v2/posts"
        /*"https://public-api.wordpress.com/rest/v1/sites/arushatest725870187.wordpress.com/posts"*/
        )
            .then(res=>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }, 
    getPostById(id){
        return fetch(
            `http://box5462.temp.domains/~arushain/wp-json/wp/v2/posts/${id}`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    getPostFeaturedImage(mediaId){
        return fetch(
            `http://box5462.temp.domains/~arushain/wp-json/wp/v2/media/${mediaId}`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },

}

export default PostsApiService