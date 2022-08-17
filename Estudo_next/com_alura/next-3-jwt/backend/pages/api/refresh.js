import { db } from '../../db';
import { authService } from '../../src/services/authService';

const controllers = {
  async refreshTokens(req, res) {
    const { refresh_token } = req.body;

    try {
      const { sub } = await authService.validateRefreshToken(refresh_token);

      db.users.findOne({ _id: sub, refresh_token }, async function (err, user) {
        if (err) return res.status(500).json({ error: { status: 500, message: 'Internal server error', } });

        if(!user?._id) {
          return res.status(401).json({
            error: {
              status: 401,
              message: 'Invalid refresh token, please login again.',
            }
          });
        }

        const tokens = {
          access_token: await authService.generateAccessToken(sub),
          refresh_token: await authService.generateRefreshToken(sub),
        };

        db.users.update({ _id: sub }, { $set: { refresh_token: tokens.refresh_token } }, function (err) {
          if (err) throw new Error('Not avaiable to set refresh token');
          
          return res.status(200).json({
            data: tokens,
          });
        });
      });

    } catch (err) {
      return res.status(401).json({
        error: {
          status: 401,
          message: 'Invalid refresh token, please login again.',
        }
      });
    }
  },
}

const controllerBy = {
  POST: controllers.refreshTokens,
}

/**
 * @swagger
 * /api/refresh:
 *   post:
 *     summary: Regenerate the user tokens
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                properties: 
 *                   refresh_token:
 *                      type: string
 *                      default: omariosouto
 *                      description: You have to login first to get a refresh token
 *     responses:
 *       200:
 *         description: You refresh token is valid, you can refresh it.
 *       401:
 *         description: You are not authorized, refresh token invalid
 */
export default function handle(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
}
