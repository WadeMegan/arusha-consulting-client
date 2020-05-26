import config from '../config'

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