/*import { createClient } from "contentful"

var client = createClient({
    space: "cvysyefe75et",
    accessToken:
      "sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM"
  });*/
  

const SponsorApiService = {
    
    getSponsor(){
        return fetch(`https://cdn.contentful.com/spaces/cvysyefe75et/environments/master/entries?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM&content_type=featuredSponsor`
        /*spaces/cvysyefe75et/environments/master/content_types/post?access_token=sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM*/)
            .then(res=> 
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }

}

export default SponsorApiService