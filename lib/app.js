const net = require('net');
const parseRequest = require('./utils/parseRequest');
const { createResponse } = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/red')
      client.end(createResponse({ body: 
`<html>
<body>
<h1>red thing</h1>
</body>
</html>`, 
      status: '200 ok',
      contentType: 'text/html' }));
      
    else if(request.path === '/green')
      client.end(createResponse({ body: 
`<html>
<body>
<h1>green thing</h1>
</body>
</html>`, 
      status: '200 ok',
      contentType: 'text/html' }));
    else if(request.path === '/blue')
      client.end(createResponse({ body: 
`<html>
<body>
<h1>blue thing</h1>
</body>
</html>`, 
      status: '200 ok',
      contentType: 'text/html' }));   
    else if(request.path === '/' && request.method === 'GET') 
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
          <html>
            <body>
              <h1>You made it!</h1>
            </body>
          </html>`
      }));
    else {
      client.end(createResponse({
        contentType: 'text/html',
        status: '404 not found',
        body: `
          <html>
            <body>
              <h1>Oops! This page seems to have been misplaced.</h1>
            </body>
          </html>`
      }));
      client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
