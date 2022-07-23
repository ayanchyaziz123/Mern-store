const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    tax_percentage: {
        type: Number,
        default: 0,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review'
      }],
    image: {
        type: String
    }
    
}, {timestamps: true});

module.exports = mongoose.model('product', productSchema);