let express = require("express")
let server = express()
server.get("/",(req,res)=>{
  res.send("<h1>Your's server have been started</h1>")

})
server.listen(8080,()=>{
    console.log("wooo Your's server server have been started")
})