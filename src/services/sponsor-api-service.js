import config from '../config'
/*import { createClient } from "contentful"

var client = createClient({
    space: "cvysyefe75et",
    accessToken:
      "sUfETTOWGHcvDD1Xvbk6ZQEHEFoRS5eO50YeO7dr9tM"
  });*/
  

const SponsorApiService = {
    
    getSponsor(){
        return fetch(`${config.API_ENDPOINT}/sponsors`)
            .then(res=> 
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }

}

export default SponsorApiService