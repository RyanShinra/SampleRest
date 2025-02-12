import { createServer, IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to the REST API' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
};

const server = createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
