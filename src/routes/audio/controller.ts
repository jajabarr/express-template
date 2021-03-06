import { Request, Response } from 'express';
import { HttpRoute } from '../interface/http-route';

class AudioRouter extends HttpRoute {
  public create(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public read(req: Request, res: Response): void {
    res.json({ message: 'GET /audio request received' });
  }

  public update(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public delete(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
}

export const audioRouter = new AudioRouter();
