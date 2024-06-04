// import mongoose, { model,Schema } from "mongoose";
const mongoose = require('mongoose');
const { Schema, model } = mongoose
const TransactionSchema = new Schema({
    description: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
});

const TransactionModel = model('Transaction', TransactionSchema)

module.exports = TransactionModel