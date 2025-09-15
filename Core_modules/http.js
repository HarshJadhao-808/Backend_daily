import http from 'http'

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text"})
   if(req.url == "/"){
      res.end("Hello bhai")
   }
})



server.listen (3000,()=>{

})