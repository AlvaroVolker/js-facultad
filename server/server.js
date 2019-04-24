const http = require('http');
const router = require('./router.js');
const port = 3001;


const requestHandler = (request, response) => {
	router.route(request, response); 
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});