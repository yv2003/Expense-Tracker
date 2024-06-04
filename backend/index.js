const express = require('express')
const app = express();
const cors = require('cors');
const Transaction = require('./models/Transaction.js')
const mongoose = require("mongoose");
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.post('/api/transaction', async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(process.env.MONGO_URL)
        const { description, date, amount } = req.body;
        const transaction = await Transaction.create({ description,date, amount })//Transaction -> model.schema of DB
        res.json(transaction);
    } catch (error) {
        console.log(error)
    }

})

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transac = await Transaction.find();//finds all the transactions
    res.json(transac);
})
app.listen(4000, () => {
    console.log('server is running on port 4000')
})

//password: ipncM1PvUIqPfoH5