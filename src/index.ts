import express from 'express';
// import { rootHandler, helloHandler } from './handlers';
import { audioRouter } from './routes';

const app = express();
const port = process.env.PORT || '8000';

app.use('/audio', audioRouter);

// app.get('/', rootHandler);
// app.get('/hello/:name', helloHandler);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
