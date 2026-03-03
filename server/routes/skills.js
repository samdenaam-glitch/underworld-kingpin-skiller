import express from 'express';
const router = express.Router();
router.get('/skills', (req,res)=>res.json({skills:['woodcutting','mining','fishing']}));
export default router;