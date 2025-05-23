import BienAcquis from '../models/BienAcquis.js';

// Créer un bien acquis
export const createBienAcquis = async (req, res) => {
  try {
    const bienAcquis = new BienAcquis(req.body);
    await bienAcquis.save();
    res.status(201).json(bienAcquis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les biens acquis
export const getBienAcquis = async (req, res) => {
  try {
    const bienAcquisList = await BienAcquis.find();
    res.status(200).json(bienAcquisList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un bien acquis par ID
export const getBienAcquisById = async (req, res) => {
  try {
    const bienAcquis = await BienAcquis.findById(req.params.id);
    if (!bienAcquis) return res.status(404).json({ message: "Bien acquis non trouvé" });
    res.status(200).json(bienAcquis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un bien acquis
export const updateBienAcquis = async (req, res) => {
  try {
    const bienAcquis = await BienAcquis.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bienAcquis) return res.status(404).json({ message: "Bien acquis non trouvé" });
    res.status(200).json(bienAcquis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un bien acquis
export const deleteBienAcquis = async (req, res) => {
  try {
    const bienAcquis = await BienAcquis.findByIdAndDelete(req.params.id);
    if (!bienAcquis) return res.status(404).json({ message: "Bien acquis non trouvé" });
    res.status(200).json({ message: "Bien acquis supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
