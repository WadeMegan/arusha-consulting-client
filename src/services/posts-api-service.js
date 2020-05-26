import config from '../config'

const PostsApiService = {
    
    getPosts(){
        return fetch(`${config.API_ENDPOINT}/posts`)
            .then(res=> res.json())
    }, 
    getPostFeaturedImage(assetId){
        return fetch(
            `${config.API_ENDPOINT}/posts/assets/${assetId}`)
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },

}

export default PostsApiService