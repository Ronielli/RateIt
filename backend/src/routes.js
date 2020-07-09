import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CommentController from './app/controllers/CommentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.show);
routes.put('/users', UserController.update);

routes.get('/comments', CommentController.index);
routes.post('/comments/:company_id/:user_id', CommentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
