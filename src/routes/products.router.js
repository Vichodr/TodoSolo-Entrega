import express from 'express';
import {
  createProduct,
  deleteProduct,
  editProduct,
  getOneProduct,
  getProducts,
} from '../controllers/products.controller.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:productId', getOneProduct);
productRouter.post('/', createProduct);
productRouter.delete('/:productId', deleteProduct);
productRouter.put('/:productId', editProduct);

export default productRouter;
