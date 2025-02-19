const http = require('http');
const port = 3001;
const server = http.createServer(async(req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const data = await fetch('https://fakestoreapi.com/products');
  const resData = await data.json();
  const htmlTemplate = `
  <html>
    <head>
    <title>Online shop</title>
    <style>
      .container{
        border: 1px solid red;
        display: flex;
      }
      .container img{
        border: 1px solid black;
      }
    </style>
    </head>
    <body>
    <div>
    ${
    resData.map((ele) => {
      return (`
        <div class="container">
        <div>
        <img src=${ele.image} heihgt=200 width=200 />
        </div>
        <div>
        <h3>${ele.price}</h3>
        </div>
        <div>
        <h3>${ele.title}</h3>
        <h4>${ele.description}</h4>
        </div>
        </div>
        `)
    })
    }
    </div>
    
    </body>
  </html>
  `
  //console.log(resData[0].title);
  res.end(htmlTemplate);
})
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
