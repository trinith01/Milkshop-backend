
import Product from "../models/products.js"; // Import Product model
import Transaction from "../models/transaction.js";

// Get all transactions
export const getAllTransactions = async (req, res) => {
    const { search, criteria, startDate, endDate } = req.query;
  
    let query = {};
  
    if (search) {
      query[criteria] = { $regex: search, $options: "i" }; // Case-insensitive search
    }
  
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }
  
    try {
      const transactions = await Transaction.find(query);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
};
export const getRecentTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .sort({ date: -1 }) // Sort by date in descending order (most recent first)
            .limit(10); // Get only the most recent 10 transactions

        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch recent transactions" });
    }
};


// Create a new transaction and update product stock count
export const createTransaction = async (req, res) => {
    try {
        console.log(req.body);
        const { name, nic, products, milkQuantity, milkPricePerLiter , milkIncome , productIncome } = req.body;
        
        // Calculate total milk income and total product value
        // const totalMilkIncome = milkLiter * milkPricePerLiter;
        // const totalProductValue = products.reduce((acc, product) => acc + (product.quantity * product.productPrice), 0);
        
        // Update stock count of products
        for (const prod of products) {
            const existingProduct = await Product.findOne({ name: prod.name });
            if (existingProduct) {
                existingProduct.stockCount -= prod.quantity;
                await existingProduct.save();
            }
        }
        
        const newTransaction = new Transaction({
            name,
            nic,
            products,
            milkQuantity,
            milkPricePerLiter,
            milkIncome,
            productIncome
        });

        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: "Error creating transaction", error });
    }
};

// Delete a transaction by ID
export const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting transaction", error });
    }
};
