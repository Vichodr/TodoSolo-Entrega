import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model('Product', productSchema);

export default productModel;
