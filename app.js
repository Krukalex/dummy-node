const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url ==='/'){
        res.end('Welcome to our homepage')
    }else if (req.url ==='/about'){
        res.end('Here is our short history')
    }else res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page your are looking for </p>
    <a href="/"> back home </a>`)
})

server.listen(5000)