import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },

  amount: { type: Number, required: true },

  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },

  category: { type: String, required: true },
  description: { type: String },

  merchant: { type: String },

  date: { type: Date, default: Date.now },

  receiptUrl: { type: String }, // for later
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Transaction', transactionSchema);