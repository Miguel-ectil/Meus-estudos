import { db } from '../../db';
import { authService } from '../../src/services/authService';

const controllers = {
  async login(req, res) {
    const { username, password } = req.body;

    db.users.findOne({ username, password }, async function (err, user) {
      if (err) res.status(500).json({ error: { status: 500, message: 'Internal Server Error' } });
      if (!user) res.status(401).json({ error: { status: 401, message: 'Username or password are invalid' } });

      const access_token = await authService.generateAccessToken(user._id);
      const refresh_token = await authService.generateRefreshToken(user._id);

      db.users.update({ _id: user._id }, { $set: { refresh_token: refresh_token } }, function (err) {
        if (err) res.status(500).json({ error: { status: 500, message: 'Internal Server Error' } });

        res.status(200).json({
          data: {
            access_token,
            refresh_token,
          }
        });
      });
    });
  }
};


const controllerBy = {
  POST: controllers.login,
  OPTIONS: (_, res) => res.send('OK'),
}

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Returns access_token and refresh_token
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                properties: 
 *                   username:
 *                      type: string
 *                      default: omariosouto
 *                   password:
 *                      type: string
 *                      default: safepassword
 *     responses:
 *       200:
 *         description: everything succeed and you are able to login
 *       401:
 *         description: You are not authorized, password or username are invalid
 */
export default function handle(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
}
