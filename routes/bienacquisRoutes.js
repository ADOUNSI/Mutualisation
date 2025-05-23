import express from 'express';
import { 
  createBienAcquis, 
  getBienAcquis, 
  getBienAcquisById, 
  updateBienAcquis, 
  deleteBienAcquis 
} from '../controllers/BienAcquisController.js';

const router = express.Router();

router.post('/', createBienAcquis);
router.get('/', getBienAcquis);
router.get('/:id', getBienAcquisById);
router.put('/:id', updateBienAcquis);
router.delete('/:id', deleteBienAcquis);

export default router;
