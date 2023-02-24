const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');            //'text/plain' displays plain styling text on website.
  res.setHeader('Content-Type', 'text/html');               //'text/plain' displays frontend website 
  //res.end('Hello World');                                 //Output screen
  
  //To display the frontend website
  res.end(`<!DOCTYPE html>                                  
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animations and Keyframes</title>
  </head>
  <style>
      .container{
          background-color: bisque;
      }
      .box{
          background-color: greenyellow;
          border: 2px solid black;
          width: 250px;
          height: 250px;
          text-align: center;
          /* margin: auto; */
          position: relative;
          animation-name: SI;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-name: SI2;
  
          /*These properties can be set using shorthand
          animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode;*/
          /* animation: SI 2s ease-in 1s 12 backwards; */
  
      }
      @keyframes SI{
          from{
              width: 200px;
          }
          to{
              width: 1000px;
          }
      }
      @keyframes SI2{
          0%{
              top: 0px;
              left: 0px;
          }
          25%{
              top: 250px;
              left: 0px;
          }
          50%{
              top: 250px;
              left: 250px;
          }
          100%{
              top: 0px;
              left: 250px;
          }
      }
  </style>
  <body>
      <div class="container">
          <div class="box">
              This is a box
          </div> 
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});