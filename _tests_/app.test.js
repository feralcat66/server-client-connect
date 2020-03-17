const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with the red route', () => {
    return request(app)
      .get('/red')
      .then(res =>{
        expect(res.text).toEqual(
`<html>
<body>
<h1>red thing</h1>
</body>
</html>`
        );
      });
  });
});

describe('app routes', () => {
  it('responds with the green route', () => {
    return request(app)
      .get('/green')
      .then(res =>{
        expect(res.text).toEqual(
          `<html>
<body>
<h1>green thing</h1>
</body>
</html>`
        );
      });
  });
});

describe('app routes', () => {
  it('responds with the blue route', () => {
    return request(app)
      .get('/blue')
      .then(res =>{
        expect(res.text).toEqual(
          `<html>
<body>
<h1>blue thing</h1>
</body>
</html>`
        );
      });
  });
});
