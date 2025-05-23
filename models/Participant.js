// models/Participant.js
import mongoose from 'mongoose';
import Utilisateur from './User.js';

// Schéma Participant (hérite de Utilisateur)
const participantSchema = new mongoose.Schema({
  // Champs hérités de Utilisateur, rendus optionnels :
  email: { 
    type: String, 
    required: false // Surcharge du "required: true" du parent
  },
  pays_residence: { 
    type: String, 
    required: false 
  },
  nom: { 
    type: String, 
    required: false 
  },
  prénom: { 
    type: String, 
    required: false 
  },

  // Champs spécifiques à Participant :
  date_inscription: {
    type: Date,
    default: Date.now
  },
  groupeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Groupe'
  },
  statut: {
    type: String,
    enum: ['actif', 'inactif', 'en_attente'],
    default: 'actif'
  }
});

// Création du discriminator (héritage)
export default Utilisateur.discriminator('Participant', participantSchema);