import express from 'express';
import {
  createAdmin,
  loginAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
} from '../controllers/AdminController.js';

const router = express.Router();

// Routes pour Admins
router.post('/admins', createAdmin);
router.post('/admins/login', loginAdmin);
router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminById);
router.put('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

export default router;