const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>medial quries</title>
      <style>
          .box {
              background-color: red;
              color: green;
              text-align: center;
              display: none;
              font-size: 25px;
          }
  
          @media only screen and (max-width: 300px) {
              #box1 {
  
                  display: block;
  
              }
  
          }
  
          @media only screen and (min-width: 300px) and (max-width: 500px) {
              #box2 {
                  display: block;
                  background-color: blue;
                  font-size: 2em;
  
              }
          }
  
          @media  only screen and (min-width: 500px) and (max-width: 800px) {
              #box3 {
                  display: block;
                  background-color: green;
                  color:red;
                  font-size: 3em;
              }
          }
          @media only screen and (min-width: 800px){
              #box4 {
                  display: block;
                  background-color: purple;
                  font-size: 4em;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="box" id="box1"> i am a phone </div>
      <div class="box" id="box2">i am a tab</div>
      <div class="box" id="box3">i am a desktop</div>
      <div class="box" id="box4">i am a wide screen computer.</div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});