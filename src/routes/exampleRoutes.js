import { Router } from 'express';
const router = Router();
import { getExample } from '../controllers/exampleController';

router.get('/', getExample);

export default router;
