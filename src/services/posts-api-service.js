import { createClient } from "contentful"

var client = createClient({
    space: "cvysyefe75et",
    accessToken:
      "sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM"
  });
  

const PostsApiService = {
    
    getPosts(){
        return fetch(`https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/entries?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM&content_type=post`
        /*spaces/cvysyefe75et/environments/master/content_types/post?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM*/)
            .then(res=> res.json()
                /*(!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()*/
            )
    }, 
    getPostById(id){
        return fetch(`https://api.contentful.com`,{
            headers: {
                "content-type":"application/json",
                "authorization": "Bearer sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM"
            }
        })
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },
    getPostFeaturedImage(mediaId){
        return fetch(
            `https://box5462.temp.domains/~arushain/wp-json/wp/v2/media/${mediaId}`
            )
                .then(res=>
                    (!res.ok)
                        ? res.json().then(e=>Promise.reject(e))
                        : res.json()
                )
    },

}

export default PostsApiService