// console.log("Hello WOrld");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Date And Time</title>
  
      <style>
          h1{
              text-shadow: 2px 2px 5px rebeccapurple;
              margin: 10px;
              padding: 20px;
  
          }
          .div{
              background-color: darkgreen;
              margin: 10px;
              padding: 20px;
              color: aliceblue;
              text-align: center;
              box-shadow: 10px 10px 20px green;
              font-weight: 900;
          }
          .container{
              border: 2px solid gray;
              box-shadow: 10px 10px 10px black;
          }
      </style>
  </head>
  <body>
   <div class="container">
      <h1>Javascript date and Time</h1>
  
      <div class="div"> 
       Current time is <span id="time"></span>
      </div> 
   </div>
  
      <script>
          console.log("Javascript Date and time");
  
          // let dt = new Date();
          // console.log(dt);
  
          // let newDate = new Date("2019-09-30");
          
          // let newDate = Date(10000);
  
          //let newDate = new Date(year,month,date,hours,minutes,second)
          let newDate = new Date(2030,10,2,11,59,00)
          console.log(newDate);
          let year = newDate.getFullYear();
          console.log(year);
  
          let m = newDate.getMonth();
          console.log(m);
  
          let d = newDate.getDay();
          console.log(d);
  
          let h = newDate.getHours();
          console.log(h);
  
          newDate.setDate(35);
          newDate.setMinutes(35);
          console.log(newDate);
  
  
           let t= Date.now();
           console.log(t);
  
          function updateTime()
          {
              time.innerHTML = new Date();
          }
  
          setInterval(updateTime,1000)
  
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});