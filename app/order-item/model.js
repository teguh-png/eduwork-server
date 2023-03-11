const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const orderItemShema = Schema({
  name: {
    type: String,
    minlength: [5, 'Panjang nama makanan minimal 5 karakter'],
    required: [true, 'name must be field'],
  },

  price: {
    type: Number,
    required: [true, 'price must be field'],
  },

  qty: {
    type: Number,
    required: [true, 'Kuantitas harus di isi'],
    min: [1, 'Kuantitas minimal 1'],
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },

  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
});

module.exports = model('OrderItem', orderItemShema);
