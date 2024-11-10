'use strict';

import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Node js accounting!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}!`);
});
