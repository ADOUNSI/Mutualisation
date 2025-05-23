import express from 'express';
import { 
  createGroupe, 
  getGroupes, 
  getGroupeById, 
  updateGroupe, 
  deleteGroupe 
} from '../controllers/GroupeController.js';

const router = express.Router();

router.post('/', createGroupe);
router.get('/', getGroupes);
router.get('/:id', getGroupeById);
router.put('/:id', updateGroupe);
router.delete('/:id', deleteGroupe);

export default router;
