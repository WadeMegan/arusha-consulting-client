const axios = require("axios")

exports.handler = async (event, context, callback) => {
    const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
  
    axios
        .get(`${process.env.REACT_APP_HEROKU_API_URL}/likes/posts/1VIIwtztOR0RzQbDdFIfDu`)
        .then((response)=>{
            pass(response.data)
        })
        .catch((err)=>pass(err))

    /*try {
      let response = await fetch(`${process.env.REACT_APP_HEROKU_API_URL}/likes/posts/1VIIwtztOR0RzQbDdFIfDu`, 
    {
     method: event.httpMethod,
     headers: {
       "Authorization": `Bearer ${process.env.REACT_APP_HEROKU_API_TOKEN}`, 
       "Content-Type": "application/json"
    },
     body: event.body
    })
     let data = await response.json()
     await pass(data)
   } catch(err) {
       let error = {
         statusCode: err.statusCode || 500,
         body: JSON.stringify({error: err.message})
   }
    await pass(error)
   }*/
  }