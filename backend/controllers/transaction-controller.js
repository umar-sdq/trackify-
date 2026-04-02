import Transaction from "../models/transaction.js";

export const addTransaction = async (req, res) => {
  const { amount, type, category, description, date, merchant, receiptUrl } = req.body;

  if (!amount || !type || !category) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const transaction = new Transaction({
      userId: req.userData.supabaseUserId,
      amount,
      type,
      category,
      description,
      merchant,
      receiptUrl,
      date: date || new Date(),
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error("Add transaction error:", err);
    res.status(500).json({ error: "Failed to create transaction." });
  }
};

export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.userData.supabaseUserId,
    }).sort({ date: -1 });

    res.status(200).json(transactions);
  } catch (err) {
    console.error("Get transactions error:", err);
    res.status(500).json({ error: "Failed to fetch transactions." });
  }
};

export const getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOne({
      _id: id,
      userId: req.userData.supabaseUserId,
    });

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    res.status(200).json(transaction);
  } catch (err) {
    console.error("Get transaction by ID error:", err);
    res.status(500).json({ error: "Failed to fetch transaction." });
  }
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, type, category, description, date, merchant, receiptUrl } = req.body;

  try {
    const updatedTransaction = await Transaction.findOneAndUpdate(
      {
        _id: id,
        userId: req.userData.supabaseUserId,
      },
      {
        amount,
        type,
        category,
        description,
        date,
        merchant,
        receiptUrl,
      },
      { new: true, runValidators: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    res.status(200).json(updatedTransaction);
  } catch (err) {
    console.error("Update transaction error:", err);
    res.status(500).json({ error: "Failed to update transaction." });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findOneAndDelete({
      _id: id,
      userId: req.userData.supabaseUserId,
    });

    if (!deletedTransaction) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    res.status(200).json({ message: "Transaction deleted successfully." });
  } catch (err) {
    console.error("Delete transaction error:", err);
    res.status(500).json({ error: "Failed to delete transaction." });
  }
};