const http = require('http');
const fs = require('fs');
let path = './resources';

let files = fs.readdir(path, function (err, items) {
  if (err) console.log(err);

  files = items;
});

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      res.setHeader('content-type', 'text/html');
      files.map((x) => res.write(`<a href=${x}>${x.split(".")[0]}<br></a>`));

      break;
    }
    default: {
      files.find((u) => {
        if (`/${u}` == req.url) {
          fs.readFile(`./resources/${u}`, (err, file) => {
            if (err) console.log(err);
            res.write(file);
            res.end();
          });
        }
      });
      break;
    }
  }
});
server.listen(8000, () => {
  console.log('server is listening');
});
