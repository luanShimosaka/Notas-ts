import { Request, Response } from 'express';
import User from '../../schemas/User';

class UserController {
  async get(req: Request, res: Response) {
    const { userId } = req;
    const user = await User.findById(userId);
    return res.json(user);
  }
}

export default new UserController();