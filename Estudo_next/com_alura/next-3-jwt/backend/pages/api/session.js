import { db } from '../../db';
import { authService } from '../../src/services/authService';
import { getTokenFromHeaders } from '../../src/utils/getTokenFromHeaders';

const sessionController = {
  async getSession(req, res) {
    const token = getTokenFromHeaders(req);

    if(!token) return res.status(401).json({ error: { status: 401, message: 'You don\'t have credentials' } });

    try {
      await authService.validateAccessToken(token);
      const decodedToken = await authService.decodeToken(token);

      db.users.findOne({ _id: decodedToken.sub }, function (err, user) {
        if (err || user === null) {
          res.status(401).json({
            error: {
              status: 401,
              message: 'Invalid access token, please login again.',
            }
          });
        }

        res.status(200).json({
          data: {
            user: {
              username: user.username,
              email: user.email,
            },
            id: decodedToken.sub,
            roles: decodedToken.roles,
          }
        });
      });

    } catch(err) {
      res.status(401).json({
          status: 401,
          message: 'Your access token is not valid, so you are not able to get a session.',
      });
    }
  },
};

const controllerBy = {
  GET: sessionController.getSession,
  OPTIONS: (_, res) => res.send('OK'),
}

/**
 * @swagger
 * /api/session:
 *   get:
 *     summary: Returns a session for one specific user
 *     parameters: 
 *        - in: header
 *          name: x-authorization
 *          schema:
 *            type: string
 *            description: You have to login first to get a session.
 *            default: access_token
 *          required: true
 *     responses:
 *       200:
 *         description: Session returned with success
 *       401:
 *         description: You are not authorized to get a session
 */
export default function handle(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
}
