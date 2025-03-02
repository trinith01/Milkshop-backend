import express from 'express'
import mongoose from 'mongoose';
import { connectDb } from './db/db_Connection.js';
import employeeRouter from './Routes/employee_Routes.js';
import productRouter from './Routes/product_Routes.js';
import cors from 'cors';
import transactionRouter from './Routes/transaction_Routes.js';

const app  = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
})
connectDb()
app.use(express.json());
app.use('/employees',employeeRouter)
app.use('/products',productRouter)
app.use('/transactions',transactionRouter)

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
})