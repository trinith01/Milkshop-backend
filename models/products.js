import mongoose from "mongoose";
const prodcutSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    price: {
        type: Number,
        required: true
    },
    stockCount:{
        type: Number,
        required: true

    },
    expireDate: {
        type: Date,
        required: true
    }
})

const Product = mongoose.model('Product', prodcutSchema)
export default Product;