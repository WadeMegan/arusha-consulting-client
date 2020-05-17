//import { createClient } from "contentful"

/*var client = createClient({
    space: "cvysyefe75et",
    accessToken:
      "sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM"
  });*/
  

const PostsApiService = {
    
    getPosts(){
        return fetch("http://localhost:8070/posts"/*`https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/entries?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM&content_type=post`*/
        /*spaces/cvysyefe75et/environments/master/content_types/post?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM*/)
            .then(res=> res.json()
                /*(!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()*/
            )
    }, 
    getPostById(id){
        return fetch(`https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/entries/${id}?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM&content_type=post`)
            .then(res=>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    getPostFeaturedImage(assetId){
        return fetch(
            `https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/assets/${assetId}?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM`)
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },

}

export default PostsApiService