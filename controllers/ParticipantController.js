import Participant from '../models/Participant.js';

// Récupérer tous les participants
export const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Récupérer un participant par ID
export const getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant non trouvé' });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Créer un participant
export const createParticipant = async (req, res) => {
    console.log("Données reçues :", req.body); // Vérifie les données reçues
  
    try {
      const newParticipant = new Participant(req.body);
      await newParticipant.save();
      res.status(201).json(newParticipant);
    } catch (error) {
      console.error("Erreur création participant :", error);
      res.status(400).json({ message: "Erreur lors de la création du participant", error });
    }
  };
  
  

// Mettre à jour un participant
export const updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) return res.status(404).json({ message: 'Participant non trouvé' });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Supprimer un participant
export const deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant non trouvé' });
    res.json({ message: 'Participant supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
