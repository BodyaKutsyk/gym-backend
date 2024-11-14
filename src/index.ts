'use strict';

import cors from 'cors';
import express from 'express';
import coachRouter from './routes/coach.route.js';
import discountRouter from './routes/discount.route.js';
import subscriptionRouter from './routes/subscription.route.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import additionalServiceRouter from './routes/additionalService.route.js';
import clientRouter from './routes/client.route.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('Welcome to the gym!');
});

app.use('/coaches', coachRouter);
app.use('/discounts', discountRouter);
app.use('/subscriptions', subscriptionRouter);
app.use('/services', additionalServiceRouter);
app.use('/clients', clientRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
