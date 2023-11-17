import productModel from '../models/product.model.js';

async function getProducts(request, response) {
  const page = request.query.page;

  const products = await productModel.find({});

  return response.send({ products });
}

async function getOneProduct(request, response) {
  try {
    const productId = request.params.productId;

    const product = await productModel.findById(productId);

    if (!product) {
      return response.status(404).send({ error: 'Producto no existe' });
    }

    return response.send({ product });
  } catch (error) {
    response.status(500).send({ error });
  }
}

async function createProduct(request, response) {
  try {
    const body = request.body;

    const product = await productModel.create({
      name: body.name,
      category: body.category,
      description: body.description,
      image_url: body.image_url,
    });

    return response.send({ product });
  } catch (error) {
    response.status(500).send({ error });
  }
}

async function editProduct(request, response) {
  const productId = request.params.productId;

  const body = request.body;

  const product = await productModel.updateOne(
    { _id: productId },
    {
      ...body,
    },
    { new: true }
  );

  return response.send({ product });
}

async function deleteProduct(request, response) {
  const productId = request.params.productId;

  await productModel.deleteOne({ _id: productId });

  return response.send({ success: true });
}

export { getProducts, getOneProduct, createProduct, editProduct, deleteProduct };
