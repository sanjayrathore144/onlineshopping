const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('productSchema', productSchema);
