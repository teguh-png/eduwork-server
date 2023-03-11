const { Schema, model } = require('mongoose');

const deliveryAddressSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama alamat harus di isi'],
      maxLength: [255, 'Panjang maksimal nama alamat adalah 255 karakter'],
    },

    kelurahan: {
      type: String,
      required: [true, 'Kelurahan harus di isi'],
      maxLength: [255, 'Panjang maksimal kelurahan adalah 255 karakter'],
    },

    kecamatan: {
      type: String,
      required: [true, 'Kecamatan harus di isi'],
      maxLength: [255, 'Panjang maksimal kecamatan adalah 255 karakter'],
    },

    kabupaten: {
      type: String,
      required: [true, 'Kabupaten harus di isi'],
      maxLength: [255, 'Panjang maksimal kabupaten adalah 255 karakter'],
    },

    provinsi: {
      type: String,
      required: [true, 'Provinsi harus di isi'],
      maxLength: [255, 'Panjang maksimal provinsi adalah 255 karakter'],
    },

    detail: {
      type: String,
      required: [true, 'Detail alamat harus di isi'],
      maxLength: [1000, 'Panjang maksimal detail adalah 1000 karakter'],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = model('DeliveryAddress', deliveryAddressSchema);
