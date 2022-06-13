const http = require('http')
const port = 3500
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Welcome to server.js</h1>") 
    res.end()
})
server.listen(port,()=>{console.log(`node.js simple server is launched at :http://localhost:${port}...`)})

