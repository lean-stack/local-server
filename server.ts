import app from './src/app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Local server listening on http://localhost:${port}`);
});
