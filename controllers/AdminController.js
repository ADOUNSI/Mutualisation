import Admin from '../models/Admin.js';
import bcrypt from 'bcrypt';

export const createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
    try {
      const { email, mot_de_passe } = req.body;
  
      // Vérifier si l'admin existe
      const admin = await Admin.findOne({ email });
      if (!admin) return res.status(404).json({ message: "Admin non trouvé" });
  
      // Vérifier le mot de passe
      const isMatch = await bcrypt.compare(mot_de_passe, admin.mot_de_passe);
      if (!isMatch) return res.status(400).json({ message: "Identifiants invalides" });
  
      res.status(200).json({ message: "Connexion réussie", admin });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    admin ? res.json(admin) : res.status(404).json({ message: "Admin non trouvé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};