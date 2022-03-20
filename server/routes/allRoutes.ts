import {Router} from 'express';

import AuthController from '../controller/AuthController' 
import  FavoriteController  from '../controller/FavoriteController';
import { verifyJWT } from '../middleware/checkAuth';
const router = Router()


router.get('/:userId/favorites', FavoriteController.getAllFavorites)
router.post('/:userId/favorites', FavoriteController.saveFavorite)
router.delete('/:userId/favorites/:articleId', FavoriteController.removeFavorite)

router.post('/login', AuthController.LoginPost)
router.post('/signup', AuthController.SignUpPost)


export default router;