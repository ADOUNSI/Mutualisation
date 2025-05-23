import Groupe from '../models/Groupe.js';

// Créer un groupe
export const createGroupe = async (req, res) => {
  try {
    const groupe = new Groupe(req.body);
    await groupe.save();
    res.status(201).json(groupe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les groupes
export const getGroupes = async (req, res) => {
  try {
    const groupes = await Groupe.find();
    res.status(200).json(groupes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un groupe par ID
export const getGroupeById = async (req, res) => {
  try {
    const groupe = await Groupe.findById(req.params.id);
    if (!groupe) return res.status(404).json({ message: "Groupe non trouvé" });
    res.status(200).json(groupe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un groupe
export const updateGroupe = async (req, res) => {
  try {
    const groupe = await Groupe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!groupe) return res.status(404).json({ message: "Groupe non trouvé" });
    res.status(200).json(groupe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un groupe
export const deleteGroupe = async (req, res) => {
  try {
    const groupe = await Groupe.findByIdAndDelete(req.params.id);
    if (!groupe) return res.status(404).json({ message: "Groupe non trouvé" });
    res.status(200).json({ message: "Groupe supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
