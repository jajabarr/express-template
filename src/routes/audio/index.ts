import express, { Request, Response } from 'express';
import { audioRouter } from './controller';

export const router = express.Router({
  strict: true,
});

router.post('/', (req: Request, res: Response) => {
  audioRouter.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  audioRouter.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  audioRouter.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  audioRouter.delete(req, res);
});
