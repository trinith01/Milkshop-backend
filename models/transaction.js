import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },

});


   

const transactionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nic: { type: String, required: true },
    products: [productSchema],
    milkQuantity: { type: Number, required: true },
    milkPricePerLiter: { type: Number, required: true },
    milkIncome: { type: Number, required: true},
    productIncome: { type: Number, required: true }, // Added this field
    date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
