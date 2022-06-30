import express from 'express';
import {create, getAll, getOne,deleteUser, update} from '../controllers/user.controller';

const router = express.Router()


router.get('/',getAll);
router.get('/:id',getOne);
router.post('/new',create);
router.patch('/:id',update);
router.delete('/:id',deleteUser);



export default router;