import Transaction from '../models/Transaction.js';

// Récupérer toutes les transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Récupérer une transaction par ID
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction non trouvée' });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Créer une transaction
export const createTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la transaction', error });
  }
};

// Mettre à jour une transaction
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) return res.status(404).json({ message: 'Transaction non trouvée' });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Supprimer une transaction
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction non trouvée' });
    res.json({ message: 'Transaction supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
