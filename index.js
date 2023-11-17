import express from 'express';
import productRouter from './src/routes/products.router.js';
import { PORT } from './src/config/environment.js';
import connectDB from './src/config/mongo.js';

const app = express();

app.use(express.json());
app.use('/products', productRouter);

async function startServer() {
  const isConnected = await connectDB();
  if (isConnected) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

startServer();
